import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAppTokenEntity } from './entities/user-apptoken.entity';

@Injectable()
export class UserAppTokenService {
  constructor(
    @InjectRepository(UserAppTokenEntity)
    private readonly userAppTokenRepo: Repository<UserAppTokenEntity>,
  ) {}

  createFromParam(memberId: number, deviceType: string, token: string) {
    return this.userAppTokenRepo.create({
      member_id: memberId,
      device_type: deviceType,
      token,
    });
  }

  async save(entity: UserAppTokenEntity) {
    return this.userAppTokenRepo.save(entity);
  }
}
