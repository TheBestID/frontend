import React, { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Achivement, { TAchivement } from 'src/components/Achivement'
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

const MOCK_GLA = {

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
    <div className="bg-[#023047] min-h-[160vh] h-full">

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

      <main className="flex items-center flex-col mr-2 ml-2 pt-14">

        <div className="rounded-md w-full bg-primary h-44 mt-12 mb-12">
          <Image src="/download.svg" alt="Identicon" width="128" height="128" className="rounded-full h-32 w-32 mx-5 my-20"/>
        </div>

        <div className="flex flex-col w-full mb-6 md:flex-row md:items-center">
          <span className="text-2xl text-white px-4 py-2">DANILA</span>

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

        <div className="grid w-full gap-4 grid-cols-4 mt-12 text-bold mr-4">
          <button className="underline decoration-primary text-xl font-semibold text-white">CV</button>
          <button className="underline decoration-gray-700 text-xl font-semibold text-gray-600">Hacks</button>
          <button className="underline decoration-gray-700 text-xl font-semibold text-gray-600">HR</button>
          <button className="underline decoration-gray-700 text-xl font-semibold text-gray-600">Funds</button>
        </div>

        <div className="mt-6 flex w-full bg-secondary-25 h-12 items-center">
            <span className="text-2xl font-semibold text-center text-white ml-4">
              Experience
            </span>
        </div>

        {
          Array.isArray(achivements)
          && achivements.map(
            (achivement: TAchivement, i: number) =>
              <Achivement key={i} data={achivement}/>
            )
        }
        

            <div className="flex w-full bg-secondary-25 h-12 items-center mt-6">
                <span className="text-2xl font-semibold text-center text-white ml-4">Projects</span>
            </div>

            <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full mt-6">
              <div className="flex justify-between">
                <span className="text-xl font-medium text-white">Hackathon prize
                <Image src="/icon.png" alt="Identicon" width="16" height="16" className=""></Image>
                </span>
                <span className="text-white text-sm">2022-2024</span>
              </div>
              <span className="text-white">Chainlink Fall 2022 Hackathon</span>
              <span className="mt-4 text-white opacity-60">* Social impact prize</span>
              <span className="text-white opacity-60 ml-4">1st place</span>
              <span className="text-white opacity-60">* Grand prize</span>
              <span className="text-white opacity-60 ml-4">1st place</span>
            </div>




        <div className="flex w-full bg-secondary-25 h-12 items-center mb-6 mt-6">
            <span className="text-2xl font-semibold text-center text-white ml-4">Education</span>
        </div>

        <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full mb-6">
              <div className="flex justify-between">
                <span className="text-xl font-medium text-white">MIPT
                </span>
                <span className="text-white text-sm">2020-2024</span>
              </div>
              <span className="text-white">B.S.</span>
              <span className="mt-4 text-white opacity-60">* Applied Math</span>
              <span className="text-white opacity-60 ml-4">(GPA: 4.9/5.0)</span>
            </div>

        <div className="flex w-full bg-secondary-25 h-12 items-center mb-6">
            <span className="text-2xl font-semibold text-center text-white ml-4">Achievements</span>
        </div>

        <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full">
              <div className="flex justify-between">
                <span className="text-xl font-medium text-white">Hackathon prize
                <Image src="/icon.png" alt="Identicon" width="16" height="16" className=""></Image>
                </span>
                <span className="text-white text-sm">2022-2024</span>
              </div>
              <span className="text-white">Chainlink Fall 2022 Hackathon</span>
              <span className="mt-4 text-white opacity-60">* Social impact prize</span>
              <span className="text-white opacity-60 ml-4">1st place</span>
              <span className="text-white opacity-60">* Grand prize</span>
              <span className="text-white opacity-60 ml-4">1st place</span>
            </div>

            <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full mt-6 mb-6">
              <div className="flex justify-between">
                <span className="text-xl font-medium text-white">Hackathon prize
                <Image src="/icon.png" alt="Identicon" width="16" height="16" className=""></Image>
                </span>
                <span className="text-white text-sm">2022-2024</span>
              </div>
              <span className="text-white">Chainlink Fall 2022 Hackathon</span>
              <span className="mt-4 text-white opacity-60">* Social impact prize</span>
              <span className="text-white opacity-60 ml-4">1st place</span>
              <span className="text-white opacity-60">* Grand prize</span>
              <span className="text-white opacity-60 ml-4">1st place</span>
            </div>

        <div className="flex w-full bg-secondary-25 h-12 items-center">
            <span className="text-2xl font-semibold text-center text-white ml-4">Skills & Hobbies</span>
        </div>


      </main>

    </div>
  )
}

export default Profile

