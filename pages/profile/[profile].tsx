import React, { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Achivement, { TAchivement } from 'src/components/Achivement'
import ProfileCV from 'src/components/ProfileCV'
import ProfileHacks from 'src/components/ProfileHacks'
import ProfileHR from 'src/components/ProfileHR'
import ProfileFunds from 'src/components/ProfileFunds'
import ProfileNav from 'src/components/ProfileNav'
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
  const [activeSubPage, setActiveSubPage] = useState('CV')

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

        <div className="gap-2 flex flex-col w-full mb-6 md:flex-row md:items-center">
          <span className="text-2xl text-white lg:mr-6">DANILA</span>

          <a 
            target="_blank"
            rel="noreferrer noopener"
            href={`https://etherscan.io/address/${wallet}`}
            className="border w-full h-12 border-primary rounded-xl p-3"
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
          
          <ProfileNav
            activeSubPage={activeSubPage}
            setActiveSubPage={setActiveSubPage}
          />

          <div className="lg:mt-1 lg:w-full lg:ml-12 lg:col-span-7">
          {
            activeSubPage === 'CV'
            ? <ProfileCV achivements={achivements}/>
            : activeSubPage === 'Hacks'
            ? <ProfileHacks />
            : activeSubPage === 'HR'
            ? <ProfileHR />
            : activeSubPage === 'Funds'
            ? <ProfileFunds />
            : null
          }
          </div>
        </div>
      </main>

    </div>
  )
}

export default Profile

