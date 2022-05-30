import {
  Controller,
  Body,
  Post,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { LoginReqDto, LoginResDto } from './dtos/login.dto';
import { CreateMemberDto } from './dtos/create-member.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { getMessage, MessagesKey } from 'src/utils/messages';
import { InjectLanguage } from 'src/decorators/inject-language.decorator';
import { BlockChainService } from 'src/blockchain/blockchain.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MobileVersionService } from 'src/mobile-version/mobile-version.service';
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
  ) {}

  @Post('register')
  async create(@InjectLanguage() lang: string, @Body() body: CreateMemberDto) {
    const { employee_code, citizen_id, password } = body;

    const employee = await this.employeeService.findOneByCodeAndCitizenId(
      employee_code,
      citizen_id,
    );
    if (!employee) {
      const message = getMessage(lang, MessagesKey.EMPLOYEE_ID_NOT_FOUND);
      throw new BadRequestException(message, message);
    }

    const existing = await this.memberService.findDuplicateMember(body);
    if (existing.length > 0) {
      const message = getMessage(lang, MessagesKey.ALREADY_REGISTERED);
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
    const { username, password, device_type, token } = body;
    const member = await this.memberService.findOneForLogin(username);
    if (!member) {
      const message = getMessage(lang, MessagesKey.DATA_NOT_FOUND);
      throw new NotFoundException(message, message);
    }

    const version = await this.mobileVersionService.findCurrentVersion();
    if (version.is_maintenance) {
      if (!version.whitelistMember(member.id)) {
        const message =
          version.maintenance_title ||
          getMessage(lang, MessagesKey.UNAUTHORIZE);
        throw new BadRequestException(message, message);
      }
    }

    const isPwdMatch = await member.comparePassword(password);
    if (!isPwdMatch) {
      const message = getMessage(lang, 'INVALID_LOGIN');
      throw new BadRequestException(message, message);
    }

    if (device_type && token) {
      const hasToken = member.findToken(device_type, token);
      if (!hasToken) {
        const appTokenEntity = this.userAppTokenService.create({
          member_id: member.id,
          device_type,
          token,
        });
        await this.userAppTokenService.save(appTokenEntity);
      }
    }

    delete member.apptokens;

    const accessToken = this.memberService.signJwtToken(member);

    // TODO: member dto
    return { access_token: accessToken, member };
  }
}
