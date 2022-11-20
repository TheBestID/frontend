import { useState, useEffect } from 'react'

import { Wallet } from 'src/near-wallet'
import {
  BASE_URL, NEAR_CONTRACT_ADDRESS
} from 'src/constants'

import checkAddress, {
  EBlockchain
} from 'src/utils/checkAddress'

type TUid = number
type TAddress = string

export type TNearWalletInfo = {
  uid: TUid,
  address: TAddress,
}

export default function useNear(wallet) {
  const [
    res, setRes
  ] = useState<TNearWalletInfo | null>(null)

  async function setupNearWallet(nearWallet) {
    const isSignedIn = await nearWallet.startUp()

    if (isSignedIn) {
      const accounts = await nearWallet.wallet
        .getAccounts()
      const account = Array.isArray(accounts)
        ? accounts[0]
        : {}
      const address = account.accountId

      // assign res

      let uid

      const chainId = 0
      const blockchain = EBlockchain.NEAR
      try {
        uid = await checkAddress({
          address, chainId, blockchain,
        })
      } catch(e) { }
      setRes({
        address,
        uid: typeof uid === 'number' ? uid : null,
      })
    } else {
      nearWallet.signIn()
    }
  }

  useEffect(() => {
    if (wallet === 'near') {
      const nearWallet = new Wallet({
        createAccessKeyFor: NEAR_CONTRACT_ADDRESS
      })
      setupNearWallet(nearWallet)
    }
  }, [wallet])

  return res
}
