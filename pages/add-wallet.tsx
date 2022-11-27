import { useState, useContext } from 'react'
import { NextPage } from 'next'
import { ethers } from 'ethers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { BASE_URL } from 'src/constants'

import useLoggedIn from 'src/hooks/useLoggedIn'
import {
  WalletContext
} from 'src/contexts/WalletContext'

const GITHUB_CLIENT_ID = 'ec74794a7d8786ccf463';

function Layout({ children }) {
  return (
    <div className="bg-black min-h-[100vh] h-full">
      <Head>
        <title>Soul ID</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <main className="flex items-center justify-center h-full min-h-[100vh]">
        <div className="p-4 max-w-md">
          {children}
        </div>
      </main>
    </div>
  )
}

const AddWallet: NextPage = () => {
  const router = useRouter()
  const {
    wallet, setWallet
  } = useContext(WalletContext)
  const loggedIn = useLoggedIn(wallet)
  const [blockchain, setBlockchain] = useState(null)

  if (blockchain === null) {
    return (
      <Layout>
        <h1
          className="text-primary font-bold text-[4rem]"
        >
          Choose Blockchain
        </h1>
        <div className="flex align-center justify-between mt-4">
          <button
            onClick={() => {
              setWallet('metamask')
              setBlockchain('eth')
            }}
            className="text-primary rounded-xl border-primary border px-4 py-2 uppercase"
          >
            Ethereum
          </button>
          <button
            onClick={() => {
              setWallet('near')
              setBlockchain('near')
            }}
            className="text-primary rounded-xl border-primary border px-4 py-2 uppercase"
          >
            Near
          </button>
        </div>
      </Layout>
    )
  }

  let pJsx = (
    <>
      <h1
        className="text-primary font-bold text-[4rem]"
      >
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

  if (blockchain === 'near') {
    pJsx = (
      <>
        <h1
          className="text-primary font-bold text-[4rem]"
        >
          Attach Near Wallet
        </h1>
        <p className="text-white text-lg">
          Connect your account from popup.
        </p>
      </>
    )
  }

  if (
    loggedIn != null
    && loggedIn.isAuth === false
  ) {
    const url = 
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
    window.location.assign(url)
    /*
    // for popup
    window.open(
      url,
      '_blank',
      'height=480,width=640',
    )
    */
  } else if (loggedIn !== null) {
    const { address, balance } = loggedIn
    pJsx = wallet === 'metamask'
      ? (
        <>
          <h1
            className="text-primary font-bold text-[4rem]"
          >
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
          <h1
            className="text-primary font-bold text-[4rem]"
          >
            Attached successfully
          </h1>
          <p className="text-white text-lg">
            address:&nbsp;<a 
              target="_blank"
              rel="noreferrer noopener"
              href={`https://explorer.testnet.near.org/accounts/${address}`}
              className="text-primary"
            >
              {address}
            </a>
          </p>
        </>
      )
    router.replace(`/profile/${address}`)
  }

  return <Layout>{pJsx}</Layout>
}

export default AddWallet
