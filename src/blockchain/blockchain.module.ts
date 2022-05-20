import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BlockChainService } from './blockchain.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [BlockChainService],
  exports: [BlockChainService],
})
export class BlockChainModule {}
