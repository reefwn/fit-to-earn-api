import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileVersionEntity } from './entities/mobile-version.entity';
import { MobileVersionService } from './mobile-version.service';

@Module({
  imports: [TypeOrmModule.forFeature([MobileVersionEntity])],
  providers: [MobileVersionService],
  exports: [MobileVersionService],
})
export class MobileVersionModule {}
