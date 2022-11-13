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
        <title>Vacancies</title>
        <meta name="description" content="explore all vacancies on Souldev network"/>
      </Head>


      <Header/>

      <main className="flex flex-col items-center lg:px-16 w-full pt-32 px-3">

          <ExploreNav/>

          <div className="grid w-full grid-cols-12 mt-12 mb-2">
            <span className="text-left opacity-60 font-regular text-md text-white lg:col-span-4 lg:ml-4">Company</span>
            <span className="text-left opacity-60 font-regular text-md text-white lg:col-span-2">All vacancies</span>
            <span className="text-left opacity-60 font-regular text-md text-white lg:col-span-1">Floor price</span>
          </div>

          <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full pt-12">

                <div className="grid w-full grid-cols-12 items-center">
                    <div className="border border-secondary-25 p-7 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/logo.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Souldev Network</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">15</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">25 000 $</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>

                <div className="grid w-full grid-cols-12 items-center mt-12">
                    <div className="border border-secondary-25 p-5 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/solana.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Solana</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">20</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">43 000 $</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>

                <div className="grid w-full grid-cols-12 items-center mt-12">
                    <div className="border border-secondary-25 p-5 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/polygon.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Polygon</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">13</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">30 000 $</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>

                <div className="grid w-full grid-cols-12 items-center mt-12 mb-12">
                    <div className="border border-secondary-25 p-5 rounded-xl items-center w-28 h-28 ml-3">
                      <Image src="/chainlink.svg" alt="Identicon" width="80" height="80" className="lg:col-span-1 border-2 "></Image>
                    </div>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">Chainlink</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-2">17</span>
                    <span className="text-left font-regular text-2xl text-white lg:col-span-3">27 500 $</span>
                    <span className="text-left font-regular text-2xl text-white ">Coming soon</span>
                </div>
          </div>

      </main>
    </div>
  )
}

export default Companies
