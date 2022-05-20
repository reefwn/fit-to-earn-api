import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { BlockChainCreateWalletResDto } from 'src/blockchain/blockchain.dto';

@Injectable()
export class BlockChainService {
  constructor(private httpService: HttpService) {}

  async createWallet(
    username: string,
    password: string,
  ): Promise<BlockChainCreateWalletResDto> {
    return lastValueFrom(
      this.httpService
        .post(`${process.env.BLOCKCHAIN_IP}/createWallet`, {
          username,
          password,
        })
        .pipe(
          map((res) => res.data),
          catchError((err) => {
            console.log('ERROR: createWallet', err);
            throw new HttpException(err.response.data, err.response.status);
          }),
        ),
    );
  }
}
