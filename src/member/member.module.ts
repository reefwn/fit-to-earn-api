import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './entities/member.entity';
import { EmployeeService } from 'src/employee/employee.service';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity, EmployeeEntity])],
  controllers: [MemberController],
  providers: [MemberService, EmployeeService],
})
export class MemberModule {}
