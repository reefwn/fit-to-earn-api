import {
  Controller,
  Get,
  Body,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { LoginDto } from './dto/login.dto';
import { CreateMemberDto } from './dto/create-member.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { getMessage } from 'src/utils/messages';
import { InjectLanguage } from 'src/decorators/inject-language.decorator';

@Controller('member')
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
    private employeeService: EmployeeService,
  ) {}

  @Post()
  async create(@InjectLanguage() lang: string, @Body() body: CreateMemberDto) {
    const { employee_code, email, citizen_id, tel } = body;

    const employee = await this.employeeService.findOneByCodeAndCitizenId(
      employee_code,
      citizen_id,
    );

    if (!employee) {
      const message = getMessage(lang, 'EMPLOYEE_ID_NOT_FOUND');
      throw new BadRequestException(message, message);
    }

    const member = await this.memberService.findDuplicateMember(
      employee_code,
      email,
      citizen_id,
      tel,
    );

    if (member.length > 0) {
      const message = getMessage(lang, 'ALREADY_REGISTERED');
      throw new BadRequestException(message, message);
    }

    // TODO: create wallet for user
  }

  // TODO: login function
  @Get()
  async login(@Body() body: LoginDto) {
    const member = await this.memberService.findOneForLogin(body.username);
  }
}
