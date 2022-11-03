import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'

const BASE_URL = 'http://127.0.0.1:8000'


async function checkAddress(
  {...bodyData}: {
    address: string,
    chainId: string,
  }
): number | null {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/check`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const data = await response.json()
    return uid
  } catch(e) {
    return null
  }
}

async function postAddress(
  {...bodyData}: {
    address: string,
    chainId: string,
    txHash: string,
  }
): number {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/add`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const data = await response.json()
    const uid = data.num
    return uid
  } catch(e) {
    return null
  }
}

async function postMsgParams(
  {...bodyData}: {
    address: string,
    chainId: string,
  }
): number {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/msg_params`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const msgParams = await response.json()

    const params = {...msgParams, from: address}
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [params],
    })

    return txHash
  } catch(e) {
    console.log(e)
    return null
  }
}


const Register: NextPage = () => {
  const [address, setAddress] = useState(null)
  const [chainId, setChainId] = useState(null)
  const [balance, setBalance] = useState(0)
  const [uid, setUid] = useState(null)
  const router = useRouter()
  const isMetamaskInstalled = typeof window !== 'undefined' && window.ethereum

  useEffect(() => {
    const fn = async () => {
      if (address == null || chainId == null) {
        return () => {}
      }
      let uid = await checkAddress(address, chainId)
      if (typeof uid === 'number') {
        router.replace(`/profile/${address}`)
      } else {
        router.replace(`/register`)
      }
    }
    fn()
  }, [address, chainId])


  async function onChainConnected(
    {chainId}: {chainId: string}
  ) {
    setChainId(chainId)
  }

  async function onMetamaskConnected(accounts: any) {
    if (!Array.isArray(accounts) || accounts.length === 0) return

    setAddress(accounts[0])

    const balance = await window.ethereum.request({
      method:'eth_getBalance', 
      params: [address, 'latest']
    })
    setBalance(balance)
  }

  useEffect(() => {
    if (isMetamaskInstalled) {
      const data = {chainId: window.ethereum.networkVersion}
      onChainConnected(data)
      window.ethereum.request({
        method:'eth_requestAccounts'
      }).then(onMetamaskConnected)
    }
  }, [isMetamaskInstalled])

  if (!address) {
    return null
  }

  async function onSubmit(e) {
    e.preventDefault()
    const txHash = await postMsgParams(
      address, chainId
    )
    const resultUid = await postAddress(
      address, chainId, txHash
    )
    if (resultUid != null) {
      router.replace(`/profile/${address}`)
    }
  }

  return (
    <div className="bg-black min-h-[100vh] h-full">
      <Head>
        <title>Soul ID</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <main className="flex items-center justify-center h-full min-h-[100vh]">
        <div className="p-4 max-w-md">
          <form onSubmit={onSubmit}>

            <button
              className="bg-black text-primary rounded-xl border-primary border px-4 py-2 uppercase"
            >
              register
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Register
