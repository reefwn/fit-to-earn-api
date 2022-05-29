import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MobileVersionEntity } from './entities/mobile-version.entity';

@Injectable()
export class MobileVersionService {
  constructor(
    @InjectRepository(MobileVersionEntity)
    private readonly mobileVersionRepo: Repository<MobileVersionEntity>,
  ) {}

  async findCurrentVersion() {
    return this.mobileVersionRepo.findOne({ order: { created_at: 'DESC' } });
  }
}
