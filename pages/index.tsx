import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from 'src/components/Header'
import Card from 'src/components/Card'

const Home: NextPage = () => {
  const [vacanciesData, setVacanciesData] = useState([])
  const [profilesData, setProfilesData] = useState([])
  const [hacksData, setHacksData] = useState([])

  useEffect(() => {
    const MOCK_VACANCY = {
      title: 'SoulDev Network',
      subtitle: 'Empowering people to change the world faster',
      children: (
        <span className="text-white text-sm">
          {23} vacancies | {1000} followers
        </span>
      ),
      href: '/job/1',
    }

    setVacanciesData([
      MOCK_VACANCY, MOCK_VACANCY, MOCK_VACANCY, MOCK_VACANCY, 
    ])

    const MOCK_PROFILE = {
      title: 'Artem',
      subtitle: 'Evolution is not about going forward',
      children: (
        <span className="text-white text-sm">
          Cool guy!!!
        </span>
      ),
      href: '/profile/0x41c9288b78090946db0fd6d32d8cb1fefe18134b',
    }

    setProfilesData([
      MOCK_PROFILE, MOCK_PROFILE, MOCK_PROFILE, MOCK_PROFILE,
    ])

    const MOCK_HACK = {
      title: 'Artem',
      subtitle: 'Evolution is not about going forward',
      children: (
        <span className="text-white text-sm">
          Cool guy!!!
        </span>
      ),
      href: '/profile/0x41c9288b78090946db0fd6d32d8cb1fefe18134b',
    }

    setHacksData([
      MOCK_HACK, MOCK_HACK, MOCK_HACK, MOCK_HACK,
    ])

  }, [])

  const vacanciesJsx = vacanciesData.map((vacancyData: any, i: number) => {
    return (
      <Card key={i} {...vacancyData}/>
    )
  })

  const profilesJsx = profilesData.map((profileData: any, i: number) => {
    return (
      <Card key={i} {...profileData}/>
    )
  })

  const hacksJsx = hacksData.map((hackData: any, i: number) => {
    return (
      <Card key={i} {...hackData}/>
    )
  })

  return (
    <div className="bg-[#023047] min-h-[100vh]">
      <Head>
        <title>SoulDev</title>
        <meta name="description" content="SoulDev landing page" />
      </Head>

      <Header/>

      <div id="spacer" className="h-8 w-8"/>

      <main className="flex flex-col items-center lg:px-16 w-full">
        
        <div className="xl:grid xl:grid-cols-2">
            <div className="">
              <div className='text-left p-0 mx-auto mt-36 lg:mt-44'>
                  <h1 className="text-center lg:text-left font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-primary text-5xl lg:text-9xl">HOME <span className="text-white text-4xl lg:text-8xl">FOR</span></span> 
                    <span className="text-4xl lg:text-8xl"> DECENTRALIZED AVATARS</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-4 font-regular lh-6 ld-04 pb-11 text-gray-400 lg:text-left text-center">
                    A web3 marketplace where people and companies can create and manage decentralized avatars
                  </h2>
              </div>
              <div className="flex mt-5 justify-center lg:justify-start">
                  <div className=" rounded-md pb-8">
                    <Link href="/jobs">
                      <a
                        className="btn btn-primary btn-large mr-4 items-center justify-center rounded-xl border border-transparent bg-primary px-10 py-4 text-base font-medium text-white hover:bg-secondary-25 lg:py-6 lg:px-12 lg:text-xl lg:rounded-2xl"
                      >
                        Explore
                      </a>
                    </Link>
                    <Link href="/add-wallet">
                      <a
                        className="btn btn-primary btn-large items-center justify-center rounded-xl border border-transparent bg-indigo-100 px-10 py-4 text-base font-medium hover:bg-indigo-200 lg:py-6 lg:px-12 lg:text-xl lg:rounded-2xl"
                      >
                        Create
                      </a>
                    </Link>
                  </div>
                </div> 
              </div>

              <div className="mt-24 ml-4">
              <Image alt="logo" src="/Product.svg" width="1000" height="1000" className=""></Image>
              </div>

        </div>

   
            

            <div className='text-center p-0 mx-auto mt-52 lg:ml-24 lg:mr-24'>
                <h1 className="text-4xl lg:text-8xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Be a part of the best company</span>
                </h1>
            </div>

            <div className="pt-2 w-full md:px-1 px-3">
              <div className ="grid gap-4 grid-cols-1s w-full mt-6 mb-6 p-4 bg-secondary-25 rounded-lg lg:gap-6 lg:grid-cols-4">
                  {vacanciesJsx}
                </div>
            </div>

            <div className="flex w-full pr-1 pl-1">
                <Link href="/jobs">
                  <a className="flex w-full h-12 mt-6 mb-24 items-center text-white text-center justify-center rounded-md border border-transparent bg-secondary-25 font-medium hover:bg-secondary-60">
                    View all openings
                  </a>
                </Link>
            </div>

            <div className='text-center p-0 mx-auto mt-16 lg:ml-24 lg:mr-24'>
                <h1 className="text-4xl lg:text-8xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Find and connect with digital talent souls</span>
                </h1>
            </div>  

            <div className="pt-2 w-full md:px-1 px-3">
              <div className ="grid gap-4 grid-cols-1s w-full mt-6 mb-6 p-4 bg-secondary-25 rounded-lg lg:gap-6 lg:grid-cols-4">
                  {profilesJsx}
                </div>
            </div>

            <div className="flex w-full pr-1 pl-1">
                <Link href="/profiles">
                  <a className="flex w-full h-12 mt-6 mb-24 items-center text-white text-center justify-center rounded-md border border-transparent bg-secondary-25 font-medium hover:bg-secondary-60">
                    View all profiles
                  </a>
                </Link>
            </div>

            <div className='text-center p-0 mx-auto mt-12 lg:ml-24 lg:mr-24'>
                <h1 className="text-4xl lg:text-8xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Get access to ideas, talents from all over the world</span>
                </h1>
            </div>

            <div className="pt-2 w-full md:px-1 px-3">
              <div className ="w-full mt-10 mb-6 p-4 bg-secondary-25 rounded-lg">

                 <div className="text-center mt-6">
                  <span className="text-4xl text-white w-56">Create <span className="text-4xl font-semibold">OWN</span> hackathon for avatars no-code</span>
                  
                  <div className="text-center text-white mt-6">
                  <span className="">Powered by 
                    <Link href="/">
                      <a className="font-semibold"> Souldev Network</a>
                    </Link>
                  </span>
                 </div>

                 <div className="gap-8 flex justify-center items-center pr-1 pl-1">
                  <Link href="/create-hack">
                    <a className="flex w-52 h-14 mt-6 mb-12 items-center text-white text-center justify-center rounded-xl border border-transparent bg-secondary-25 font-medium hover:bg-secondary-60">
                      Create hackathon
                    </a>
                  </Link>
                  <Link href="/hacks">
                    <a className="flex w-52 h-14 mt-6 mb-12 items-center text-white text-center justify-center rounded-xl border border-transparent bg-secondary-25 font-medium hover:bg-secondary-60">
                      View all hackathons
                    </a>
                  </Link>
                 </div>

                 </div>


                 <div className="flex w-full">
                   <div className="gap-4 flex overflow-x-auto w-full">
                      {hacksJsx}
                    </div>
                  </div>


                </div>
            </div>

            
            <div className="grid items-center grid-cols-1 lg:grid-cols-3 lg:gap-64 mt-44">

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

export default Home

