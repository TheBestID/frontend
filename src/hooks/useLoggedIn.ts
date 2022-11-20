import {
  useState, useEffect, useContext
} from 'react'

import {
  WalletContext
} from 'src/contexts/WalletContext'
import
  useMetamask, { TMetamaskWalletInfo }
from 'src/hooks/useMetamask'
import
  useNear, { TNearWalletInfo }
from 'src/hooks/useNear'

export default function useLoggedIn() {
  const { wallet } = useContext(WalletContext)

  const metamaskWallet = useMetamask(wallet)
  const nearWallet = useNear(wallet)

  if (wallet === 'metamask') {
    if (metamaskWallet == null) {
      return null
    }
    return {
      ...metamaskWallet,
      isAuth: metamaskWallet?.uid != null,
      type: 'metamask',
    }
  } else if (wallet === 'near') {
    if (nearWallet == null) {
      return null
    }
    return {
      ...nearWallet,
      isAuth: nearWallet?.uid != null,
      type: 'near'
    }
  }
  return {}
}
