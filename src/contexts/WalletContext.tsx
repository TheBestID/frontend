import { createContext, useState } from 'react'

export const WalletContext = createContext()

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null)
  const state = { wallet, setWallet }

  return (
    <WalletContext.Provider value={state}>
      {children}
    </WalletContext.Provider>
  )
}
