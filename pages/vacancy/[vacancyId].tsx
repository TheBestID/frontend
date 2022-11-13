import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'src/components/Header'

const Vacancy: NextPage = () => {
  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Vacancy</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <Header/>

    </div>
  )
}

export default Vacancy
