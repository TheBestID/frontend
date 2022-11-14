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
  const { owner_uuid, price, category, info, id } = data
  const dollars = price * 1200;
  const candidates = 3
  const created = 'now'

  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Vacancy</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <Header/>

      <main className="pt-44 px-6">

        <div className="grid w-full grid-cols-4">
          
          <div className="flex justify-center col-span-3">
            <div className="w-3/4 text-center">

              <Image src="/vacancy.svg" alt="vacancy" width="500" height="500" className=""/>

              <div className="ml-44">
                  <div className="flex grid-cols-3 items-center justify-center text-center gap-12 border border-secondary-25 bg-secondary-25  p-8 rounded-xl mt-12 h-16 w-3/4">
                    <div className="text-white opacity-50 text-xl font-medium px-6 hover:opacity-100 border border-secondary-25 p-3 hover:bg-secondary-25 rounded-2xl ">Overview</div>
                    <div className="text-white opacity-50 text-xl font-medium px-6 hover:opacity-100 border border-secondary-25 p-3 hover:bg-secondary-25 active:bg-secondary-25 rounded-2xl">Description</div>
                    <div className="text-white opacity-50 text-xl font-medium px-6 hover:opacity-100 border border-secondary-25 p-3 hover:bg-secondary-25 active:bg-secondary-25 rounded-2xl">History</div>
                  </div>
              </div>
              <div className="mt-14">
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
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">23 000 <span className="text-white opacity-60 font-regular">$</span></span>
                  <span className="col-span-1 text-white font-medium text-xl ml-10 text-left">3 days</span>
              </div>
              <div className="mt-12">
                <span className="flex text-white font-bold text-2xl w-full ml-6">Royalties</span>
                <span className="flex text-white opacity-60 font-regular text-md w-full ml-6">Split royalties are automatically deposited into each recipient's wallet</span>
              </div>

              <div className="border border-secondary-25 p-2 rounded-xl mt-4">
              <div className=" mt-4 grid grid-cols-10 items-center justify-start">
                  <Image src="/logo.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-3 text-left">
                    <span className="text-white text-xl font-medium">Souldev Network</span>
                  </div>
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">9 200 <span className="text-white opacity-60 font-regular">$</span></span>
                  <span className="col-span-1 text-white font-medium text-xl ml-4 text-left">40 <span className="text-white opacity-60 font-regular">%</span></span>
              </div>
              <div className=" mt-4 grid grid-cols-10 items-center justify-start">
                  <Image src="/candidate.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-3 text-left">
                    <span className="text-white text-xl font-medium">Referral agent</span>
                  </div>
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">9 200 <span className="text-white opacity-60 font-regular">$</span></span>
                  <span className="col-span-1 text-white font-medium text-xl ml-4 text-left">40<span className="text-white opacity-60 font-regular">%</span></span>
              </div>
              <div className=" mt-4 grid grid-cols-10 items-center justify-start mb-4">
                  <Image src="/many.svg" alt="vacancy" width="40" height="40" className="col-span-1"/>
                  <div className="col-span-3 text-left">
                    <span className="text-white text-xl font-medium">Candidate</span>
                  </div>
                  <span className="col-span-4 text-white font-medium text-xl ml-2 text-left">4 600 <span className="text-white opacity-60 font-regular">$</span></span>
                  <span className="col-span-1 text-white font-medium text-xl ml-4 text-left">20 <span className="text-white opacity-60 font-regular">%</span></span>
              </div>
              </div>

              <div className="mt-12">
                <span className="flex text-white font-bold text-2xl w-full ml-6">Details</span>
              </div>

              <div className="border border-secondary-25 p-2 rounded-xl mt-4 grid grid-cols-10 items-center justify-start">
                  <Image src="/etherscan-logo-circle.svg" alt="vacancy" width="30" height="30" className="col-span-1"/>
                  <div className="col-span-9 text-left">
                    <span className="text-white text-xl font-reg opacity-60">View on Etherscan</span>
                  </div>

                  <Image src="/eye.svg" alt="vacancy" width="30" height="30" className="col-span-1"/>
                  <div className="col-span-9 text-left">
                    <span className="text-white text-xl font-regular opacity-60">Open original</span>
                  </div>

                  <div className="col-span-10 text-left ml-6">
                    <div className="border solid 2px border-secondary-25 mr-6 mb-2 mt-4"></div>
                  </div>

                  <Image src="/refresh.svg" alt="vacancy" width="30" height="30" className="col-span-1"/>
                  <div className="col-span-9 text-left">
                    <span className="text-white text-xl font-regular opacity-60">Refresh metadata</span>
                  </div>
              </div>





            </div>
          </div>



          <div className="flex justify-start col-span-1">
            <div className="">
             <div className="flex w-full text-white font-semibold text-3xl mb-4">{category}</div>

             <div className="grid grid-cols-5 items-center justify-start">
                  <div className="text-left items-center col-span-1 mt-1">
                  <Image src="/logo.svg" alt="vacancy" width="70" height="70" className=""/>
                  </div>
                  <div className="col-span-2 text-left">
                    <span className="text-white text-2xl font-medium">Souldev network</span>
                  </div>
                  <div className="col-span-2 text-left">
                    <span className="text-white text-xl font-medium opacity-70">Address</span>
                  </div> 
              </div>

              <div className="col-span-10 text-left">
                    <div className="border solid 1px border-secondary-25 mt-3 mb-2"></div>
              </div>

              <div className="grid grid-cols-5 items-center justify-start">
                  <button className="text-left items-center col-span-1 mt-1">
                    <Image src="/bag.svg" alt="vacancy" width="30" height="30" className=""/>
                  </button>
                  <button className="text-center items-center col-span-1 mt-1 mr-3">
                    <Image src="/share.svg" alt="vacancy" width="30" height="30" className=""/>
                  </button>
                  <button className="text-center items-center col-span-1 mt-1">
                    <Image src="/refresh.svg" alt="vacancy" width="30" height="30" className=""/>
                  </button>
              </div>

              <div className="border border-secondary-25 p-3 rounded-xl mt-8">
                  <div className="grid grid-cols-2 items-center justify-start gap-2">
                      <div className="text-left col-span-1 bg-secondary-25 p-3 rounded-md h-24">
                        <div className="grid-cols-1 grid">
                        <span className="text-white opacity-50 font-medium">Price</span>
                        <span className="text-white text-xl font-medium">{price} ETH</span>
                        <span className="text-white opacity-50 font-medium">{dollars} $</span>
                        </div>
                      </div>

                      <div className="text-left col-span-1 bg-secondary-25 p-3 rounded-md h-24">
                        <div className="grid-cols-1 grid">
                        <span className="text-white opacity-50 font-medium">Candidates</span>
                        <span className="text-white text-xl font-medium">{candidates}</span>
                        <span className="text-white opacity-50 font-medium">{created}</span>
                        </div>
                      </div>
                  </div>

                  <div className="bg-secondary-25 grid grid-cols-1 items-center justify-center mt-2 rounded-xl h-12">
                    <span className="text-white text-center opacity-70 text-2xl font-semibold hover:opacity-100">Join vacancy</span>
                  </div>
                  <div className="border border-secondary-25  grid grid-cols-1 items-center justify-center mt-2 rounded-xl h-12 hover:border-secondary-60">
                    <span className="text-white text-center opacity-70 text-2xl font-semibold">Referral link</span>
                  </div>

              </div>

              </div>

              
              

          </div>

        </div>










      </main>

    </div>
  )
}

export default Vacancy
