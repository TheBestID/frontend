import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'src/components/Header'

const Hack: NextPage = () => {
  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Hackaton</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <Header/>

      <div id="spacer" className="h-8 w-8"/>

      <main className="flex flex-col items-center lg:px-16 w-full">
        
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:ml-12">
            <div className='text-center p-0 mx-auto mt-52 lg:mt-60'>
                <h2 className="text-center lg:text-left font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-primary text-5xl lg:text-9xl">Create</span> 
                  <span className="text-4xl lg:text-8xl">your SBT hackathon</span>
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-4 font-regular lh-6 ld-04 pb-12 text-gray-400 text-center lg:text-left pl-4">
                   Zero code. Your rules. Global scale.
                </h3>
            </div>

            <div className="flex mt-5 justify-center lg:justify-start">
                  <div className=" rounded-md pb-8">
                  <Link href="/add-wallet">
                    <a
                      className="btn btn-primary btn-large justify-center lg:justify-start lg:ml-4 rounded-xl border border-transparent bg-primary px-10 py-4 text-base font-medium text-white hover:bg-secondary-25 lg:py-6 lg:px-20 lg:text-2xl lg:rounded-2xl"
                    >
                      Create hackathon
                    </a>
                  </Link>

                </div>
            </div> 
            </div>

            <div className="mt-52 lg:ml-24 justify-center">
              <Image alt="logo" src="/people.svg" width="600" height="600" className=""></Image>
            </div>

          
        </div>

            <div className='text-center p-0 mx-auto mt-64 lg:ml-24 lg:mr-24'>
                <h2 className="text-4xl lg:text-6xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-4 pl-4">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Optimize the HACK for your favorite network and mint cups as SBTs</span>
                </h2>
            </div>

            <div className="grid items-center grid-cols-3 lg:gap-32 gap-4 mt-6">
            <button className="flex items-center">
              <Image alt="solana" src="/solana.svg" width="130" height="130"></Image>
            </button>

            <button className="flex items-center">
              <Image alt="polygon" src="/polygon.svg" width="130" height="130"></Image>
            </button>

            <button className="flex items-cente">
              <Image alt="near" src="/near.svg" width="130" height="130"></Image>
            </button>
            </div>

            <div className='text-center p-0 mx-auto mt-52 lg:ml-24 lg:mr-24'>
                <h2 className="text-4xl lg:text-6xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-4 pl-4">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Getting started</span>
                </h2>
            </div>

            <div className="mt-4 sm:mt-8 sm:flex items-center">
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

            <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-3 lg:gap-8 mt-24 mb-52">

            <div className="ml-5">
                <div className="text-white text-2xl opacity-50 text-left">Step 1</div>
                <div className="flex text-white text-xl text-left mr-10 mt-4">Conect your wallet to the network where you want to create a hacktahon.</div>
                <div className="w-80 mt-6 lg:w-full">
                  <Image alt="wallets" src="/metamask.svg" width="394" height="311" className=""></Image>
                </div>
            </div>
            <div className="ml-5 mt-20 lg:mt-0">
                <div className="text-white text-2xl opacity-50 text-left">Step 2</div>
                <div className="flex text-white text-xl text-left mr-10 mt-4">Fill out the form to create all the parts.</div>
                <div className="w-80 mt-6 lg:mt-14 lg:w-full">
                  <Image alt="fills" src="/fill.svg" width="394" height="311" className=""></Image>
                </div>
            </div>
            <div className="ml-5 mt-20 lg:mt-0">
                <div className="text-white text-2xl opacity-50 text-left">Step 3</div>
                <div className="flex text-white text-xl text-left mr-10 mt-4">Your hackathon is live.</div>
                <div className="w-80 mt-6 lg:mt-14 lg:w-full">
                  <Image alt="well done" src="/congrats.svg" width="394" height="311" className=""></Image>
                </div>
            </div>

            </div>




            <div className="grid items-center grid-cols-1 lg:grid-cols-3 lg:gap-64">
            <Link href="https://github.com/TheBestID">
                <button className="flex w-60 mt-12 mb-6 border p-3 rounded-xl items-center border-secondary-25 lg:mt-12 lg:mb-12">
                  <Image alt="link_github" src="/github.png" width="40" height="40"></Image>
                  <span className="text-white text-3xl ml-16">Github</span>
                </button>
            </Link>
            
            <Link href="https://www.youtube.com/channel/UCnJCdLblFETZD97EF1lr0eg">
                <button className="flex w-60 mb-6 border p-3 rounded-xl items-center border-secondary-25 lg:mt-12 lg:mb-12">
                  <Image alt="link_github" src="/youtube.svg" width="40" height="40"></Image>
                  <span className="text-white text-3xl ml-10">YouTube</span>
                </button>
            </Link>

            <Link href="https://t.me/souldev_network">
                <button className="flex w-60 mb-12 border p-3 rounded-xl items-center border-secondary-25 lg:mt-12 lg:mb-12">
                  <Image alt="link_github" src="/Logo.png" width="40" height="40"></Image>
                  <span className="text-white text-3xl ml-9">Telegram</span>
                </button>
            </Link> 
            </div>

            
      </main>
    </div>



  )
}

export default Hack

