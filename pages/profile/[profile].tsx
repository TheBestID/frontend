import React, { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Achivement, { TAchivement } from 'src/components/Achivement'
import ProfileCV from 'src/components/ProfileCV'
import Header from 'src/components/Header'
import Popup from 'src/components/Popup'
import AchivementForm from 'src/components/AchivementForm'
import useLoggedIn from 'src/hooks/useLoggedIn'

type Props = {
  wallet: string | undefined,
  achivements: Array<TAchivement>,
}


const MOCK_GLE = {
  startTimestamp: '13 nov 2020',
  endTimestamp: null,
  company: 'Meta',
  position: 'Chief Executive Officer',
  description: 'I did great things. Mostly attending useless meetings',
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const wallet = context?.params?.profile
  const achivements = [
    MOCK_GLE, MOCK_GLE, MOCK_GLE, MOCK_GLE,
  ]
  return {
    props: { wallet, achivements },
  }
}


const Profile: NextPage<Props> = (props) => {
  const { wallet, achivements } = props
  const loggedIn = useLoggedIn()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  let isOwnPage = false
  if (
    loggedIn != null && loggedIn.isAuth !== false
  ) {
    isOwnPage = wallet === loggedIn.address
  }

  return (
    <div className="bg-[#023047] min-h-[300vh] h-full">

      <Head>
        <title>Profile</title>
        <meta name="description" content="add wallet to register on souldev platform"/>
      </Head>

      {isPopupOpen && (
        <Popup close={
          (e: React.SyntheticEvent) =>
            setIsPopupOpen(false)
          }
        >
          <AchivementForm
            close={
              (e: React.SyntheticEvent) =>
                setIsPopupOpen(false)
            }
          />
        </Popup>
      )}

      <Header/>

      <main className="flex items-center flex-col mr-4 lg:mr-8 ml-4 lg:ml-8 pt-14">

        
        <div className="rounded-md w-full bg-primary h-44 mt-16 mb-12">
          <Image src="/download.svg" alt="Identicon" width="128" height="128" className="rounded-full h-32 w-32 mx-5 my-20"/>
        </div>

        <div className="flex flex-col w-full mb-6 md:flex-row md:items-center">
          <span className="text-2xl text-white lg:mr-6 py-2">DANILA</span>

          <a 
            target="_blank"
            rel="noreferrer noopener"
            href={`https://etherscan.io/address/${wallet}`}
            className="border w-full h-12 border-primary p-1 rounded-xl pr-3 pl-3 pb-3 pt-3"
          >
            <span className="text-[#fff8]">Address</span>
            <span className="text-[#fff8] px-14 underline">{wallet}</span>
          </a>
        </div>

        {isOwnPage && (
          <button
            className="rounded-xl w-32 h-12 text-white bg-secondary-25 mt-6"
            onClick={() => setIsPopupOpen(true)}
          >
            Add Achivement
          </button>
        )}


        
        <div className="grid lg:gap-5 lg:w-full lg:grid-cols-10">
          
            <div className="grid w-full lg:w-64 lg:col-span-2 lg:h-12 gap-10 lg:gap-4 grid-cols-4 lg:grid-cols-1 mt-12 lg:mt-7 text-bold pr-5">
              <Link href="/cv.tsx">
              <button className="lg:border lg:p-3 lg:rounded-xl lg:hover:bg-secondary-25 lg:items-center lg:border-secondary-25 underline decoration-primary text-xl lg:text-3xl font-semibold text-white lg:text-left">CV</button>
              </Link>
              <Link href="/hacks.tsx">
              <button className="lg:border lg:p-3 lg:rounded-xl lg:hover:bg-secondary-25 lg:items-center lg:border-secondary-25 underline decoration-gray-700 text-xl lg:text-3xl font-semibold text-white lg:text-left">Hacks</button>
              </Link>
              <Link href="/hr.tsx">
              <button className="lg:border lg:p-3 lg:rounded-xl lg:hover:bg-secondary-25 lg:items-center lg:border-secondary-25 underline decoration-gray-700 text-xl lg:text-3xl font-semibold text-white lg:text-left">HR</button>
              </Link>
              <Link href="/funds.tsx">
              <button className="lg:border lg:p-3 lg:rounded-xl lg:hover:bg-secondary-25 lg:items-center lg:border-secondary-25 underline decoration-gray-700 text-xl lg:text-3xl font-semibold text-white lg:text-left">Funds</button>
              </Link>
            </div>

          <div className="lg:mt-1 lg:w-full lg:ml-12 lg:col-span-7">
            <ProfileCV achivements={achivements}/>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Profile

