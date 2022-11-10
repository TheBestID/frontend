import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Popup from 'src/components/Popup'
import VacancyForm from 'src/components/VacancyForm'
import useLoggedIn from 'src/hooks/useLoggedIn'

const Vacancies: NextPage = () => {
  const loggedIn = useLoggedIn()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div className="bg-black min-h-[200vh] h-full">
      <Head>
        <title>Vacancies</title>
        <meta name="description" content="explore all vacancies on Souldev network"/>
      </Head>

      {isPopupOpen && (
        <Popup close={e => setIsPopupOpen(false)}>
          <VacancyForm
            close={e => setIsPopupOpen(false)}
          />
        </Popup>
      )}


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


        <main className="flex flex-col items-center lg:px-16 w-full">



































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

export default Vacancies

