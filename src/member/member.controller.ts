import { Controller, Body, Post, BadRequestException } from '@nestjs/common';
import { MemberService } from './member.service';
import { LoginReqDto, LoginResDto } from './dtos/login.dto';
import { CreateMemberDto } from './dtos/create-member.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { getMessage } from 'src/utils/messages';
import { InjectLanguage } from 'src/decorators/inject-language.decorator';
import { BlockChainService } from 'src/blockchain/blockchain.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MobileVersionService } from 'src/mobile-version/mobile-version.service';
import { JwtService } from '@nestjs/jwt';
import { UserAppTokenService } from 'src/user-apptoken/user-apptoken.service';

@Controller('member')
@ApiTags('Members')
export class MemberController {
  constructor(
    private memberService: MemberService,
    private employeeService: EmployeeService,
    private blockChainService: BlockChainService,
    private mobileVersionService: MobileVersionService,
    private userAppTokenService: UserAppTokenService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async create(@InjectLanguage() lang: string, @Body() body: CreateMemberDto) {
    const { employee_code, email, citizen_id, tel, password } = body;

    const employee = await this.employeeService.findOneByCodeAndCitizenId(
      employee_code,
      citizen_id,
    );

    if (!employee) {
      const message = getMessage(lang, 'EMPLOYEE_ID_NOT_FOUND');
      throw new BadRequestException(message, message);
    }

    const existing = await this.memberService.findDuplicateMember(
      employee_code,
      email,
      citizen_id,
      tel,
    );

    if (existing.length > 0) {
      const message = getMessage(lang, 'ALREADY_REGISTERED');
      throw new BadRequestException(message, message);
    }

    const blockResponse = await this.blockChainService.createWallet(
      employee_code,
      password,
    );

    const member = this.memberService.create(Object.assign(body));
    member.wallet_address = blockResponse.address;
    member.password = await this.memberService.hashPassword(password);

    await this.memberService.save(member);

    // TODO: send email to user

    return { member };
  }

  // TODO: login function
  @Post('login')
  @ApiResponse({ type: LoginResDto })
  async login(@InjectLanguage() lang: string, @Body() body: LoginReqDto) {
    const { username, password, token_device, type_device } = body;
    const member = await this.memberService.findOneForLogin(username);
    if (!member) {
      const message = getMessage(lang, 'DATA_NOT_FOUND');
      throw new BadRequestException(message, message);
    }

    const version = await this.mobileVersionService.findCurrentVersion();
    if (version.is_maintenance) {
      const whiteListUsers = JSON.parse(version.member_whitelist);
      if (!whiteListUsers.includes(member.id)) {
        const message =
          version.maintenance_title || getMessage(lang, 'UNAUTHORIZE');
        throw new BadRequestException(message, message);
      }
    }

    const isPwdMatch = await this.memberService.comparePassword(
      password,
      member.password,
    );
    if (!isPwdMatch) {
      const message = getMessage(lang, 'INVALID_LOGIN');
      throw new BadRequestException(message, message);
    }

    if (type_device && token_device) {
      const hasToken = member.apptokens.find(
        (item) =>
          item.device_type === type_device && item.token === token_device,
      );

      if (!hasToken) {
        const appTokenEntity = this.userAppTokenService.createFromParam(
          member.id,
          type_device,
          token_device,
        );
        await this.userAppTokenService.save(appTokenEntity);
      }
    }

    delete member.apptokens;

    const accessToken = this.jwtService.sign({
      username: username,
      sub: member.id,
      iat: +new Date(),
    });

    // TODO: member dto
    return { access_token: accessToken, member };
  }
}
