import React  from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { BASE_URL } from 'src/constants'

import Header from 'src/components/Header'
import ExploreNav from 'src/components/ExploreNav'

type Props = {
  data: any,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = null
  return {
    props: { data },
  }
}

const Hacks: NextPage<Props> = (props) => {
  const { data } = props

  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Hacks</title>
        <meta name="description" content="explore all hackatons on Souldev network"/>
      </Head>


      <Header/>

      <div className="flex flex-col lg:px-16 w-full pt-32 px-3">
        <ExploreNav/>

        <main>
        <div className="grid w-full grid-cols-4 gap-2 items-center mt-12">
                      <div className="col-span-3 border border-secondary-25 p-4 rounded-xl hover:border-secondary-60">
                        <span className="text-white opacity-50 font-regular">Search by hackathons</span>
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
          
          <div className="mt-24 ">
            <span className="text-left text-white text-2xl">Hacks are coming soon</span>
          </div>
        </main>

      </div>
    </div>
  )
}

export default Hacks
