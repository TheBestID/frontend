import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Hack: NextPage = () => {
  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Hackaton</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <header className="fixed flex bg-[#023047] h-24 w-full lg:px-16 justify-between pt-4">

      <div className="flex">
        <div className ="h-16 w-16 ml-2">
          <div className ="bg-primary rounded-full h-16 w-16">
            <Image alt="logo" src="/logo.svg" width="64" height="64"></Image>
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

      <div id="spacer" className="h-8 w-8"/>

      <main className="flex flex-col items-center lg:px-16 w-full">
        
            <div className='text-center p-0 mx-auto mt-36 md:mt-52 lg:mt-72'>
                <h1 className="text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-primary text-5xl lg:text-9xl">Create</span> 
                  <span className="text-4xl lg:text-8xl">your SBT hackathon for avatars</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-4 font-regular lh-6 ld-04 pb-11 text-gray-400 text-center pr-10 pl-10 lg:pr-24 lg:pl-24">
                   Zero code. Your rules. Global scale.
                </h2>
            </div>

            <div className="mt-5 sm:mt-8 sm:flex items-center">
                <div className="rounded-md pb-8">
                  <Link href="/add-wallet">
                    <a
                      className="btn btn-primary btn-large items-center justify-center rounded-xl border border-transparent bg-primary px-10 py-4 text-base font-medium text-white hover:bg-secondary-25 lg:py-6 lg:px-20 lg:text-2xl lg:rounded-2xl"
                    >
                      Create hackathon
                    </a>
                  </Link>
                </div>
            </div> 
      </main>
    </div>



  )
}

export default Hack

