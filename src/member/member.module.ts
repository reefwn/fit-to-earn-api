import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './entities/member.entity';
import { EmployeeModule } from 'src/employee/employee.module';
import { BlockChainModule } from 'src/blockchain/blockchain.module';
import { MobileVersionModule } from 'src/mobile-version/mobile-version.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserAppTokenModule } from 'src/user-apptoken/user-apptoken.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MemberEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'jwt-secret',
      signOptions: { expiresIn: process.env.JWT_EXPIRE || '60s' },
    }),
    PassportModule,

    EmployeeModule,
    BlockChainModule,
    MobileVersionModule,
    UserAppTokenModule,
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
