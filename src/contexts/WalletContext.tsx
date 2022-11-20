import {
  useState, useEffect, createContext
} from 'react'

export const WalletContext = createContext()

export const WalletProvider = ({ children }) => {
  let savedWallet = null
  if (typeof window !== 'undefined') {
    savedWallet = window.localStorage.getItem(
      'wallet'
    )
  }
  const [wallet, setWallet] = useState(savedWallet)
  const state = {
    wallet,
    setWallet: (newWallet) => {
      window.localStorage.setItem(
        'wallet', newWallet
      )
      setWallet(newWallet)
    },
  }

  return (
    <WalletContext.Provider value={state}>
      {children}
    </WalletContext.Provider>
  )
}
