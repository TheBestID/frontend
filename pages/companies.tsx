import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { BASE_URL } from 'src/constants'

import Vacancy, { TVacancy } from 'src/components/Vacancy'
import ExploreNav from 'src/components/ExploreNav'
import Header from 'src/components/Header'
import Popup from 'src/components/Popup'
import VacancyForm from 'src/components/VacancyForm'
import useLoggedIn from 'src/hooks/useLoggedIn'

async function getCompanies(
  {...bodyData}: {
    value_sorted: string,
    offset: number,
    top_number: number,
    in_asc: boolean
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/vacancy/get_previews_sortby_one`
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

const Companies: NextPage = () => {

  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Openings</title>
        <meta name="description" content="explore all vacancies on Souldev network"/>
      </Head>


      <Header/>

      <main className="flex flex-col items-center lg:px-16 w-full pt-32 px-3">

          <ExploreNav/>

          <div className="grid w-full grid-cols-4 gap-2 items-center mt-12">
                      <div className="col-span-3 border border-secondary-25 p-4 rounded-xl hover:border-secondary-60">
                        <span className="text-white opacity-50 font-regular">Search by companies</span>
                      </div>
                      <div className="col-span-1 bg-secondary-25 rounded-xl border border-secondary-25 hover:border-secondary-60 p-4 text-center">
                          <span className="text-white text-xl text-center col-span-3">All Blockchains
                          <span className="ml-6">
                            <Image src="/galka.svg" alt="Identicon" width="20" height="20" className=""></Image>
                          </span>
                          </span>
                      </div>
                      <div className="col-span-2"></div>
          </div>

          <div className="grid w-full grid-cols-12 mt-12 mb-2">
            <span className="text-left opacity-60 font-regular text-md text-white lg:col-span-4 lg:ml-4">Company</span>
            <span className="text-left opacity-60 font-regular text-md text-white lg:col-span-2">All openings</span>
            <span className="text-left opacity-60 font-regular text-md text-white lg:col-span-1">Floor price</span>
          </div>
        

          <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full pt-12">

                <div className="grid w-full grid-cols-12 items-center">
                    <div className="border border-secondary-25 p-6 rounded-xl items-center w-28 h-28 ml-3 hover:border-secondary-60">
                      <Image src="/logo.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Souldev Network</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">15</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">20,28 ETH</span>
                    <Link href="/vacancy/1">
                    <button className="border border-secondary-25 p-3 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/vacancy.svg" alt="Identicon" width="90" height="90" className="lg:col-span-1 border-2"></Image>
                    </button>
                    </Link>
                    <Link href="/vacancy/1">
                    <button className="border border-secondary-25 p-3 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/vacancy.svg" alt="Identicon" width="90" height="90" className="lg:col-span-1 border-2"></Image>
                    </button>
                    </Link>
                    <Link href="/vacancy/1">
                    <button className="border border-secondary-25 p-3 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/vacancy.svg" alt="Identicon" width="90" height="90" className="lg:col-span-1 border-2"></Image>
                    </button>
                    </Link>
                    <Link href="/vacancy/1">
                    <button className="border border-secondary-25 p-3 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/vacancy.svg" alt="Identicon" width="90" height="90" className="lg:col-span-1 border-2"></Image>
                    </button>
                    </Link>
                </div>

                <div className="grid w-full grid-cols-12 items-center mt-12">
                    <div className="border border-secondary-25 p-6 rounded-xl items-center w-28 h-28 ml-3 hover:border-secondary-60">
                      <Image src="/near.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">NEAR</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">27</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">16 887,42 NEAR</span>
                    <Link href="/vacancy/1">
                    <button className="border border-secondary-25 p-3 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/near_job.svg" alt="Identicon" width="90" height="90" className="lg:col-span-1 border-2"></Image>
                    </button>
                    </Link>
                </div>

                <div className="grid w-full grid-cols-12 items-center mt-12">
                    <div className="border border-secondary-25 p-4 rounded-xl items-center w-28 h-28 ml-3 hover:border-secondary-60">
                      <Image src="/solana.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Solana</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">20</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">1767,15 SOL</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>

                <div className="grid w-full grid-cols-12 items-center mt-12">
                    <div className="border border-secondary-25 p-4 rounded-xl items-center w-28 h-28 ml-3 hover:border-secondary-60">
                      <Image src="/ethereum.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Ethereum</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">42</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">20 ETH</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>

                <div className="grid w-full grid-cols-12 items-center mt-12 mb-12">
                    <div className="border border-secondary-25 p-5 rounded-xl items-center w-28 h-28 ml-3 hover:border-secondary-60">
                      <Image src="/chainlink.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Chainlink</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">17</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">4041,2 LINK</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>

                <div className="grid w-full grid-cols-12 items-center mb-12">
                    <div className="border border-secondary-25 p-5 rounded-xl items-center w-28 h-28 ml-3 hover:border-secondary-60">
                      <Image src="/filecoin.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Filecoin</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">17</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">4041,2 LINK</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>
          </div>

      </main>
    </div>
  )
}

export default Companies
