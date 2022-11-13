import React  from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from 'src/components/Header'
import ExploreNav from 'src/components/ExploreNav'

const BASE_URL = 'http://127.0.0.1:8000'

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

      <div className="flex flex-col items-center lg:px-16 w-full pt-32 px-3">
        <ExploreNav/>

        <main>
          hacks go here
        </main>

      </div>
    </div>
  )
}

export default Hacks
