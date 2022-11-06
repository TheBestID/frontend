import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Vacancies: NextPage = () => {
  return (
    <div className="bg-black min-h-[100vh] h-full">
      <Head>
        <title>Vacancies</title>
        <meta name="description" content="explore all vacancies on Souldev network"/>
      </Head>
    </div>
  )
}

export default Vacancies

