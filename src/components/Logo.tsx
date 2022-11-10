import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
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
  )
}

export default Logo
