import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Profile: NextPage = () => {
  return (
    <div className="bg-black min-h-[100vh] h-full">
      <Head>
        <title>Profile</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>
    </div>
  )
}

export default Profile

