export enum EBlockchain {
  ETH = 'eth',
  NEAR = 'near',
}

export type TUserWallet = {
  blockchain: EBlockchain,
  address: string,
  chainId?: number,
}

export type TUserData = {
  username: string,
  wallets: Array<TUserWallet>,
}

