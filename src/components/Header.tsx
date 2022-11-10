import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <header
      className="border-b border-primary fixed flex bg-[#023047] h-24 w-full lg:px-16 justify-between pt-4 z-10"
    >

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

      <div className="flex">

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

      </div>

    </header>  
  )
}

export default Header

