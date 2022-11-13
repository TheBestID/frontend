import { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { BASE_URL } from 'src/constants'

import Header from 'src/components/Header'

async function getVacancy(
  {...bodyData}: {
    id: number,
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/vacancy/get_vacancy_by_id`
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

type Props = {
  data: any,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.vacancyId
  const data = await getVacancy({
    id: Number(id),
  })
  return {
    props: { data },
  }
}

const Vacancy: NextPage<Props> = (props) => {
  const { data } = props

  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Vacancy</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <Header/>

      <main className="pt-44 px-6">
        <span className="text-white">
          {JSON.stringify(data)}
        </span>

        <div className="grid w-full grid-cols-4">
          
          <div className="flex justify-center col-span-3">
            <div className="w-3/4 text-center">

              <Image src="/vacancy.svg" alt="vacancy" width="500" height="500" className=""/>

              <div className="ml-44">
                  <div className="flex grid-cols-3 items-center justify-center text-center gap-12 border border-secondary-25 bg-secondary-25 p-8 rounded-xl mt-12 h-16 w-3/4">
                    <div className="text-white hover:rounded-xl text-xl font-medium px-6 hover:border hover:border-transparent hover:bg-primary hover:h-10">Overview</div>
                    <div className="text-white hover:rounded-xl text-xl font-medium px-6 hover:border hover:border-transparent hover:bg-primary hover:h-10">Description</div>
                    <div className="text-white hover:rounded-xl text-xl font-medium px-6 hover:border hover:border-transparent hover:bg-primary hover:h-10">History</div>
                  </div>
              </div>
              <div className="mt-6">
                <span className="flex text-white font-bold text-2xl w-full ml-6">Listing</span>
              </div>
              <div className="grid grid-cols-7 items-center justify-start mt-6">
                <span className="flex col-span-3 text-white ml-6">Name</span>
                <span className="flex col-span-3 text-white">Price</span>
                <span className="flex col-span-1 text-white">Time</span>
              </div>
              <div className="border border-secondary-25 p-2 rounded-xl mt-2 grid grid-cols-10 items-center justify-start">
                  <Image src="/solana.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-3 text-left">
                    <span className="text-white text-xl font-medium">Solana</span>
                  </div>
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">23 000 $</span>
                  <span className="col-span-1 text-white font-medium text-xl ml-4 text-left">3 days</span>
              </div>
              <div className="mt-12">
                <span className="flex text-white font-bold text-2xl w-full ml-6">Royalties</span>
                <span className="flex text-white opacity-60 font-regular text-md w-full ml-6">fhefewyfhweyfhweyfgweyfgwyefgwyfgwyefgwyefgwyegfywgf</span>
              </div>
              <div className="border border-secondary-25 p-2 rounded-xl mt-4 grid grid-cols-10 items-center justify-start">
                  <Image src="/solana.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-3 text-left">
                    <span className="text-white text-xl font-medium">Solana</span>
                  </div>
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">23 000 $</span>
                  <span className="col-span-1 text-white font-medium text-xl ml-4 text-left">3 days</span>
              </div>
              <div className="border border-secondary-25 p-2 rounded-xl mt-4 grid grid-cols-10 items-center justify-start">
                  <Image src="/solana.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-3 text-left">
                    <span className="text-white text-xl font-medium">Solana</span>
                  </div>
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">23 000 $</span>
                  <span className="col-span-1 text-white font-medium text-xl ml-4 text-left">3 days</span>
              </div>
              <div className="border border-secondary-25 p-2 rounded-xl mt-4 grid grid-cols-10 items-center justify-start">
                  <Image src="/solana.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-3 text-left">
                    <span className="text-white text-xl font-medium">Solana</span>
                  </div>
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">23 000 $</span>
                  <span className="col-span-1 text-white font-medium text-xl ml-4 text-left">3 days</span>
              </div>

              <div className="mt-6">
                <span className="flex text-white font-bold text-2xl w-full ml-6">Details</span>
              </div>

              <div className="border border-secondary-25 p-2 rounded-xl mt-4 grid grid-cols-10 items-center justify-start">
                  <Image src="/solana.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-9 text-left">
                    <span className="text-white text-xl font-medium">View on Etherscan</span>
                  </div>
                  <Image src="/solana.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-9 text-left">
                    <span className="text-white text-xl font-medium">Open original</span>
                  </div>
                  <div className="col-span-10 text-left ml-6">
                    <span className="text-secondary-25 font-medium">_____________________________________________________________________________________________</span>
                  </div>
                  <Image src="/solana.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-9 text-left">
                    <span className="text-white text-xl font-medium">Refresh metadata</span>
                  </div>
              </div>





            </div>
          </div>



          <div className="flex justify-start col-span-1">grid-span-2
          
          </div>

        </div>










      </main>

    </div>
  )
}

export default Vacancy
