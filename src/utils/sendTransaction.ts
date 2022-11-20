import { EBlockchain } from 'src/types'
import { NEAR_CONTRACT_ADDRESS } from 'src/constants'
import { Wallet } from 'src/near-wallet'

async function sendETHTransaction(
  msgParams, address
): number | null {
  const params = { ...msgParams, from: address } 
  const txHash = await window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [params],
  })
  return txHash
}

async function sendNEARTransaction(
  msgParams, address
): number | null {
  const nearWallet = new Wallet({
    createAccessKeyFor: NEAR_CONTRACT_ADDRESS
  })
  const isSignedIn = await nearWallet.startUp()
  if (!isSignedIn) {
    return null
  }
  
  console.log(msgParams)
  const {
    contractId,
    method,
    args,
    gas,
    deposit,
  } = msgParams

  const txHash = await nearWallet.callMethod({
    contractId,
    method,
    args,
    gas,
    deposit,
  })
  return txHash
}

export default async function sendTransaction(
  msgParams: any,
  address: string,
  blockchain: EBlockchain,
) {
  if (blockchain === EBlockchain.ETH) {
    return sendETHTransaction(msgParams, address)
  }
  if (blockchain === EBlockchain.NEAR) {
    return sendNEARTransaction(msgParams, address)
  }
  return null
}
