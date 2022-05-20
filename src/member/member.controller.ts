import {
  Controller,
  Get,
  Body,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { LoginDto } from './dtos/login.dto';
import { CreateMemberDto } from './dtos/create-member.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { getMessage } from 'src/utils/messages';
import { InjectLanguage } from 'src/decorators/inject-language.decorator';
import { BlockChainService } from 'src/blockchain/blockchain.service';
import { ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { SALT_ROUND } from './constants/member.const';

@Controller('member')
@ApiTags('Members')
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
    private employeeService: EmployeeService,
    private blockChainService: BlockChainService,
  ) {}

  @Post('register')
  async create(@InjectLanguage() lang: string, @Body() body: CreateMemberDto) {
    const { employee_code, email, citizen_id, tel, password } = body;
    console.log(lang, body);

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

    const salt = await bcrypt.genSalt(SALT_ROUND);
    const hash = await bcrypt.hash(password, salt);

    const member = this.memberService.create(Object.assign(body));
    member.wallet_address = blockResponse.address;
    member.password = hash;

    await this.memberService.save(member);

    // TODO: send email to user

    return { member };
  }

  // TODO: login function
  @Get()
  async login(@Body() body: LoginDto) {
    const member = await this.memberService.findOneForLogin(body.username);
  }
}
