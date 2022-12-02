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

async function postSendEmail(bodyData: {
  address: string,
  chainId: number,
  email: string,
  blockchain: EBlockchain,
}) {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/company/email`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const res = await response.json()

    return res
  } catch(e) {
    console.log(e)
    return null
  }
}


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
  const [isCompany, setIsCompany] = useState<bool>(false)
  const [companyEmail, setCompanyEmail] = useState<string>('')

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

        {isCompany ? (
          <div className="flex flex-col mt-8">
            <input
              value={companyEmail}
              onChange={(e: React.HTMLInputEvent) => {
                setCompanyEmail(e.target.value)
              }}
              placeholder="Enter your company email"
              className="p-1 bg-gray-900 text-gray-300"
            />
            <div
              className="align-middle text-gray-300 py-2 ml-2 flex flex-col"
            >
              We will get to you as soon as possible to verify your company 💘.
              <small className="text-xs">
                Your email will be saved for later and may be used for communication.
                So it will be stored on our server.
              </small>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center mt-4">
            <button
              onClick={() => {
                setIsCompany(true)
              }}
              className="w-4 h-4 bg-gray-300 rounded-full border-primary border"
              id="company-toggle"
            />
            <label
              className="cursor-pointer align-middle text-gray-300 py-2 ml-2"
              htmlFor="company-toggle"
            >
              Register company
            </label>
          </div>
        )}
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
    if (isCompany === false) {
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
    } else {
      const { address, chainId } = loggedIn
      postSendEmail({
        address,
        chainId,
        email: companyEmail,
        blockchain,
      })
    }
  } else if (loggedIn !== null) {
    const { address, balance, uid, } = loggedIn
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
    router.replace(`/profile/${uid}`)
  }

  return <Layout>{pJsx}</Layout>
}

export default AddWallet
