import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Profile: NextPage = () => {
  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">


      <Head>
        <title>Profile</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <header className="flex bg-[#023047] h-24 w-full lg:px-16 justify-between pt-4">

      <div className="flex">
        <div className ="h-16 w-16 ml-2">
          <div className ="bg-primary rounded-full h-16 w-16">
            <Image src="/logo.svg" width="64" height="64"></Image>
        </div>
        </div> 
        <div className="flex flex-col ml-2 h-16 justify-center">
          <div className="text-white font-bold text-3xl">Souldev</div>
          <div className="font-semibold tracking-[0.55em] text-[#219EBC]	">network</div>
        </div>


        </div>
        <div className='flex'>
          <div className ="h-12 w-12 pt-2 pr-12">
            <div className ="bg-primary rounded-full h-12 w-12"></div>
          </div> 

          <div className = "space-y-1 pt-4 ml-2 mr-2">
            <div className ="bg-primary rounded-full h-2 w-12"></div>
            <div className ="bg-primary rounded-full h-2 w-12"></div>
            <div className ="bg-primary rounded-full h-2 w-12"></div>
          </div>
        </div>

      </header>  

      <main className="flex items-center flex-col mr-2 ml-2">

        <div className="rounded-md w-full bg-primary h-44 mt-12 mb-12">
          <img src="/download.svg" alt="Identicon" className="rounded-full h-32 w-32 mx-5 my-20"/>
        </div>

        <div className=" flex w-full text-left text-2xl text-white mb-6">DANILA</div>

        <div className="border w-full h-12 border-primary p-1 rounded-xl pr-3 pl-3 pb-3 pt-3">
          <span className="text-white opacity-60 ">Address</span>
          <span className="text-white opacity-60 px-14"> 0x///////////////////</span>
        </div>

        <button className="rounded-xl w-32 h-12 text-white bg-secondary-25 mt-6">
          Edit profile
        </button>

        <div className="grid w-full gap-4 grid-cols-4 mt-12 text-bold mr-4">
          <button className="text-xl font-semibold text-white">CV</button>
          <button className="text-xl font-semibold text-white">Hacks</button>
          <button className="text-xl font-semibold text-white">HR</button>
          <button className="text-xl font-semibold text-white">Funds</button>
        </div>

        <div className="flex scroll-mx-4 w-full text-white mb-6">__________________________________________</div>

        
        <div className="flex w-full bg-secondary-25 rounded-xl h-12 items-center">
            <span className="text-2xl font-semibold text-center text-white ml-4">Experience</span>
        </div>

        <div className="flex flex-col border border-secondary-25 p-1 rounded-xl w-full mt-6">
          <span className="text-xl font-medium text-white text ml-4">Google
          <span className="text-sm ml-32">{2022} - now</span>
          </span>
          <span className="mt-2 ml-4 text-white">Head of Frontend</span>
          <span className="mt-2 ml-4 text-white opacity-60 mr-">Description Description Description Description Description Description</span>
        </div>

        <div className="flex flex-col border border-secondary-25 p-1 rounded-xl w-full mt-6">
          <span className="text-xl font-medium text-white text ml-4">Google
          <span className="text-sm ml-32">{2022} - now</span>
          </span>
          <span className="mt-2 ml-4 text-white">Head of Frontend</span>
          <span className="mt-2 ml-4 text-white opacity-60 mr-">Description Description Description Description Description Description</span>
        </div>

        <div className="flex flex-col border border-secondary-25 p-1 rounded-xl w-full mt-6 mb-6">
          <span className="text-xl font-medium text-white text ml-4">Google
          <span className="text-sm ml-32">{2022} - now</span>
          </span>
          <span className="mt-2 ml-4 text-white">Head of Frontend</span>
          <span className="mt-2 ml-4 text-white opacity-60 mr-">Description Description Description Description Description Description</span>
        </div>

        <div className="flex w-full bg-secondary-25 rounded-xl h-12 items-center mb-6">
            <span className="text-2xl font-semibold text-center text-white ml-4">Projects</span>
        </div>

        <div className="flex w-full bg-secondary-25 rounded-xl h-12 items-center mb-6">
            <span className="text-2xl font-semibold text-center text-white ml-4">Education</span>
        </div>

        <div className="flex w-full bg-secondary-25 rounded-xl h-12 items-center mb-6">
            <span className="text-2xl font-semibold text-center text-white ml-4">Achievements</span>
        </div>

        <div className="flex w-full bg-secondary-25 rounded-xl h-12 items-center">
            <span className="text-2xl font-semibold text-center text-white ml-4">Skills & Hobbies</span>
        </div>


      </main>

    </div>
  )
}

export default Profile

