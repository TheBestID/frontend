import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ethers } from 'ethers'

const BASE_URL = 'http://127.0.0.1:8000'
const GITHUB_CLIENT_ID = 'ec74794a7d8786ccf463';

async function redirectToGH() {
  window.location.assign(
    `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
  )
}

async function checkAddress(
  {...bodyData}: {
    address: string,
    chainId: string,
  }
): Promise<number | null> {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/check`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const data = await response.json()
    return data.uid
  } catch(e) {
    return null
  }
}

const AddWallet: NextPage = () => {
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<string | null>(null)
  const [balance, setBalance] = useState<number>(0)
  const router = useRouter()

  const isMetamaskInstalled =
    typeof window !== 'undefined' && window.ethereum

  useEffect(() => {
    const fn = async () => {
      if (address == null || chainId == null) {
        return () => {}
      }
      let uid
      try {
        uid = await checkAddress({address, chainId})
      } catch(e) { }
      if (typeof uid === 'number') {
        router.replace(`/profile/${address}`)
      } else {
        redirectToGH()
        // router.replace(`/register`)
      }
    }
    fn()
  }, [address, chainId, router])

  async function onChainConnected(
    {chainId}: {chainId: string}
  ) {
    setChainId(chainId)
  }

  async function onMetamaskConnected(accounts: any) {
    if (
      !Array.isArray(accounts)
      || accounts.length === 0
    ) return

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
      const data = {chainId: window.ethereum.networkVersion}
      onChainConnected(data)
      window.ethereum.request({
        method:'eth_requestAccounts'
      }).then(onMetamaskConnected)
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
