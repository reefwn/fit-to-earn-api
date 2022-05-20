import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './entities/member.entity';
import { EmployeeModule } from 'src/employee/employee.module';
import { BlockChainModule } from 'src/blockchain/blockchain.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MemberEntity]),

    EmployeeModule,
    BlockChainModule,
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
