import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAppTokenEntity } from './entities/user-apptoken.entity';
import { UserAppTokenService } from './user-apptoken.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAppTokenEntity])],
  providers: [UserAppTokenService],
  exports: [UserAppTokenService],
})
export class UserAppTokenModule {}
