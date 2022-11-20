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
    return metamaskWallet
  } else if (wallet === 'near') {
    return nearWallet
  }
  return null
}
