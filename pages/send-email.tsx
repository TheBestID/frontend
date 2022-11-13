import React, { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BASE_URL } from 'src/constants'

import useLoggedIn from 'src/hooks/useLoggedIn'

type Props = {
  code: string | null
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context?.query?.code || null
  return {
    props: { code },
  }
}

async function postSendEmail(bodyData: {
  address: string,
  chainId: number,
  email: string,
  githubCode: string,
}) {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/email`
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

const SendEmail: NextPage<Props> = (props) => {
  const { code } = props
  const url = `/register?code=${code}`
  const router = useRouter()
  const loggedIn = useLoggedIn()
  if (
    loggedIn != null
    && loggedIn.isAuth !== false
  ) {
    const { address } = loggedIn
    router.replace(`/profile/${address}`)
  }

  const [ email, setEmail ] = useState<string>('')

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    if (code == null || loggedIn == null) {
      router.replace(`/add-wallet`)
      return
    }
    if (loggedIn.isAuth) {
      router.replace(`/profile/${loggedIn.address}`)
      return
    }
    const { address, chainId } = loggedIn
    const res = await postSendEmail({
      address, chainId, email, githubCode: code,
    })
  }

  return (
    <div className="bg-[#023047] min-h-[100vh] flex justify-center items-center">
      <Head>
        <title>SoulDev</title>
        <meta name="description" content="SoulDev continue registration" />
      </Head>

      <form
        className="flex flex-col max-w-xs bg-white rounded p-4"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="email"
          className="p-1 m-4"
        >
          <span className="cursor-pointer">
            email:
          </span>
          <input
            className="ml-2 border border-primary"
            id="email"
            type="email"
            onChange={
              (e: React.SyntheticEvent) =>
                setEmail((e.target as HTMLInputElement).value)
            }
          />
        </label>
        <button
          className="bg-white text-primary rounded-xl border-primary border px-4 py-2 uppercase"
        >
          send me verification email
        </button>
        <p className="text-gray-600 mt-8 text-xs">
          We treat your email as private data. It will not be stored in a database.
        </p>
      </form>
    </div>
  )
}

export default SendEmail

