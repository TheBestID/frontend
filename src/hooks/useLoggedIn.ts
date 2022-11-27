import { useState, useEffect } from 'react'

import
  useMetamask, { TMetamaskWalletInfo }
from 'src/hooks/useMetamask'
import
  useNear, { TNearWalletInfo }
from 'src/hooks/useNear'

export default function useLoggedIn(wallet) {
  const metamaskWallet = useMetamask(wallet)
  const nearWallet = useNear(wallet)

  if (wallet === 'metamask') {
    return metamaskWallet
  } else if (wallet === 'near') {
    return nearWallet
  }
  return null
}
