import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ethers } from 'ethers'


const AddWallet: NextPage = () => {
  const [address, setAddress] = useState(null)
  const [balance, setBalance] = useState(0)
  const isMetamaskInstalled = typeof window !== 'undefined' && window.ethereum

  async function onAccountsConnected(accounts: any) {
    if (!Array.isArray(accounts) || accounts.length === 0) return

    const address = accounts[0]
    setAddress(address)
    const balance = await window.ethereum.request({
      method:'eth_getBalance', 
      params: [address, 'latest']
    })
    setBalance(balance)
  }

  const pJsx = address != null
    ? (
      <>
        <h1 className="text-primary font-bold text-[4rem]">
          Attached successfully
        </h1>
        <p className="text-white text-lg">
          address:&nbsp;<a 
            target="_blank"
            rel="noreferrer noopener"
            href={`https://etherscan.io/address/${address}`}
            className="text-primary"
          >
            {address}
          </a>
          {' '}
          balance:&nbsp;{ethers.utils.formatEther(balance)}&nbsp;ETH
        </p>
      </>
    ) : (
      <>
        <h1 className="text-primary font-bold text-[4rem]">
          Attach metamask wallet
        </h1>
        <p className="text-white text-lg">
          You can install metamask{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary"
              href="https://metamask.io/download/"
            >
              here
            </a>
        </p>
      </>
    )

  useEffect(() => {
    if (isMetamaskInstalled) {
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(onAccountsConnected)
    }
  }, [isMetamaskInstalled])

  return (
    <div className="bg-black min-h-[100vh] h-full">
      <Head>
        <title>Soul ID</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <main className="flex items-center justify-center h-full min-h-[100vh]">
        <div className="p-4 max-w-md">
        {pJsx}
        </div>
      </main>
    </div>
  )
}

export default AddWallet
