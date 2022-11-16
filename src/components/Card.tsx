import React from 'react'
import Link from 'next/link'

type Props = {
  title: string,
  subtitle: string,
  href: string,
  children: React.ReactNode,
}

const Card: React.FC<Props> = (props) => {
  const { title, subtitle, href, children } = props

  return (
    <Link href={href}>
      <a>
        <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
          <div className="bg-primary rounded-md h-40 w-full flex"/>

          <div className="justify-center w-full flex relative top-[-3rem]">
            <div className="flex w-28 aspect-square rounded-full bg-black"/>
          </div>

          <div className="text-center">
            <span className="text-xl font-medium text-white">
              {title}
            </span>
          </div>
          <div className="text-center pt-2">
            <span className="text-[#fff7]">
              {subtitle}
            </span>
          </div>
        <div className="text-left pt-6">
          {children}
        </div>
      </div>
    </a>
  </Link>
  )
}

export default Card
