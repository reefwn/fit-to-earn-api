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

  create(dto: Partial<UserAppTokenEntity>) {
    return this.userAppTokenRepo.create(dto);
  }

  async save(entity: UserAppTokenEntity) {
    return this.userAppTokenRepo.save(entity);
  }
}
