import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-black min-h-[100vh]">
      <Head>
        <title>SoulDev</title>
        <meta name="description" content="SoulDev landing page" />
      </Head>

      <div id="spacer" className="h-8 w-8"/>

      <main className="flex flex-col lg:flex-row items-center lg:justify-center">

        <div className='relative on_video p-0 mx-auto mt-36 md:mt-52 lg:mt-72 xl:mt-80 text-center'>
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl">HOME </span> 
                  <span>FOR DECENTRALIZED AVATARS</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-4 font-regular lh-6 ld-04 pb-11 text-gray-400 text-center pr-4 pl-4">
                The best protocol for storing your digital avatar.
                Create soul id account to participate in fair
                hackathons and get into tech companies.
                </h2>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="btn btn-primary btn-large mr-4 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Explore
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary btn-large items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>

      </main>
    </div>
  )
}

export default Home

