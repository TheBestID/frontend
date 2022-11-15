import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Header: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="border-b border-primary fixed bg-[#023047] w-full z-10"
    >
      <div className="flex h-24 w-full lg:px-16 justify-between pt-4">
        <Link href="/">
          <a className="flex">
            <div className ="h-16 w-16 ml-2">
              <div
                className="bg-primary rounded-full h-16 w-16"
              >
                <Image alt="logo" src="/logo.svg" width="64" height="64"/>
              </div>
            </div>

            <div
              className="flex flex-col ml-2 h-16 justify-center"
            >
              <div
                className="text-white font-bold text-3xl"
              >
                Souldev
              </div>
              <div
                className="font-semibold tracking-[0.55em] text-[#219EBC]"
              >
                network
              </div>
            </div>
          </a>
        </Link>

        <button
          className="flex"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >

          <div className ="h-12 w-12 pt-2 pr-12">
            <div
              className="bg-primary rounded-full h-12 w-12"
            />
          </div> 

          <div className="space-y-1 pt-4 ml-2 mr-2">
            <div
              className="bg-primary rounded-full h-2 w-12"
            />
            <div
              className="bg-primary rounded-full h-2 w-12"
            />
            <div
              className="bg-primary rounded-full h-2 w-12"
            />
          </div>

        </button>
      </div>

      { isMenuOpen && (

        
        <div className="h-14 w-full transition-all duration-500">
          <div className="border-b border-primary"></div>
            <div className="grid grid-cols-6 items-center gap-10 mt-3">
              <div className="col-span-2"></div>
              <button className="col-span-1">
                  <span className="text-white opacity-80 hover:opacity-100 text-2xl font-medium text-center">Explore</span>
              </button>
              <button className="col-span-1">
                  <span className="text-white opacity-80 hover:opacity-100 text-2xl font-medium text-center">My Profile</span>
              </button>
              <div className=""></div>
            </div>
        </div>
      )}

    </header>  
  )
}

export default Header

