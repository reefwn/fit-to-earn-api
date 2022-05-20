export class BlockChainDataDto {
  address: string;
  password?: string;
  receiver: string;
  coin: string;
  amount: number;
}

export class BlockChainCreateWalletResDto {
  status: number;
  message: string;
  address: string;
}
