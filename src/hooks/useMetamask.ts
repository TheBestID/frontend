import {
  useState, useEffect,
} from 'react'

import checkAddress, {
  EBlockchain
} from 'src/utils/checkAddress'

type TAddress = string
type TChainId = number
type TBalance = number
type TUid = number

export type TMetamaskWalletInfo = {
  address: TAddress,
  balance: TBalance,
  chainId: TChainId,
  uid: TUid,
}

export default function useMetamask(wallet) {
  const [
    res, setRes
  ] = useState<TMetamaskWalletInfo | null>(null)
  const [
    address, setAddress
  ] = useState<TAddress | null>(null)
  const [
    chainId, setChainId
  ] = useState<TChainId | null>(null)
  const [
    balance, setBalance
  ] = useState<TBalance | null>(null)

  useEffect(() => {
    const fn = async () => {
      if (
        address == null
        || chainId == null
        || balance == null
      ) {
        return () => {}
      }
      let uid
      const blockchain = EBlockchain.ETH
      try {
        uid = await checkAddress({
          address, chainId, blockchain
        })
      } catch(e) { }
      setRes({
        address,
        balance,
        chainId,
        uid: typeof uid === 'number' ? uid : null,
      })
    }
    fn()
  }, [address, chainId, balance])

  async function onMetamaskConnected(accounts: any) {
    if (
      !Array.isArray(accounts)
      || accounts.length === 0
    ) return

    const address = accounts[0]
    setAddress(address)

    const balance = await window.ethereum.request({
      method:'eth_getBalance', 
      params: [address, 'latest']
    })
    setBalance(balance)
  }

  useEffect(() => {
    if (wallet === 'metamask' && window?.ethereum) {
      setChainId(Number(
        window.ethereum.networkVersion
      ))
      window.ethereum.request({
        method:'eth_requestAccounts'
      }).then(onMetamaskConnected)
    }
  }, [wallet])

  return res;
}
