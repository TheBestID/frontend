import { useState, useEffect } from 'react'

import { Wallet } from 'src/near-wallet'
import {
  BASE_URL, NEAR_CONTRACT_ADDRESS
} from 'src/constants'

import checkAddress from 'src/utils/checkAddress'
import { EBlockchain } from 'src/types'

type TUid = number
type TAddress = string
type TChainId = number

export type TNearWalletInfo = {
  uid: TUid,
  chainId: TChainId,
  address: TAddress,
  isAuth: boolean,
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

      const blockchain = EBlockchain.NEAR
      const chainId = 0
      try {
        uid = await checkAddress({
          address, chainId, blockchain
        })
      } catch(e) { }
      setRes({
        address,
        chainId,
        uid: typeof uid === 'number' ? uid : null,
        isAuth: typeof uid === 'number',
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
