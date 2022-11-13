import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { ethers } from 'ethers'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BASE_URL } from 'src/constants'

import useLoggedIn from 'src/hooks/useLoggedIn'

type Props = {
  code: string | null,
  email: string | null,
  email_token: string | null,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context?.query?.code || null
  const email = context?.query?.email || null
  const email_token = context?.query?.email_token || null
  return {
    props: { code, email, email_token, },
  }
}

async function postMsgParams(
  {...bodyData}: {
    address: string,
    chainId: string,
    github_token: string,
    hash_email: string,
    email_token: string,
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/msg_params`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const msgParams = await response.json()
    console.log(msgParams)

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

async function postAddress(
  {...bodyData}: {
    address: string,
    chainId: number,
    txHash: number,
  }
): Promise<number | null> {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/add`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const data = await response.json()
    const uid = data.uid
    return uid
  } catch(e) {
    return null
  }
}


const Register: NextPage<Props> = (props) => {
  const router = useRouter()
  const { code, email, email_token } = props
  const loggedIn = useLoggedIn()
  if (
      loggedIn != null
      && loggedIn.isAuth !== false
  ) {
    const { address } = loggedIn
    router.replace(`/profile/${address}`)
  }

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    if (loggedIn == null) return
    const { address, chainId } = loggedIn

    if (
      address == null
      || chainId == null
      || code == null
      || email_token == null
      || email == null
    ) return

    const txHash = await postMsgParams({
      address,
      chainId: String(chainId),
      github_token: code,
      email_token,
      hash_email: email,
    })
    if (txHash == null) return

    const resultUid = await postAddress({
      address,
      chainId: String(chainId),
      txHash,
    })

    if (resultUid != null) {
      router.replace(`/profile/${address}`)
    }
  }

  return (
    <div className="bg-black min-h-[100vh] h-full">
      <Head>
        <title>Soul ID</title>
        <meta
          name="description"
          content="add wallet to register on souldev platform"
        />
      </Head>

      <main
        className="flex items-center justify-center h-full min-h-[100vh]"
      >
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
