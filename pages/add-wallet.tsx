import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ethers } from 'ethers'
import useLoggedIn from 'src/hooks/useLoggedIn'

const BASE_URL = 'http://127.0.0.1:8000'
const GITHUB_CLIENT_ID = 'ec74794a7d8786ccf463';

const AddWallet: NextPage = () => {
  const router = useRouter()
  const loggedIn = useLoggedIn()

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
  if (loggedIn === false) {
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
    pJsx = (
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
    )
    router.replace(`/profile/${address}`)
  }

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
