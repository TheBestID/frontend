import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode,
  href: string,
}

const Option: React.FC<ButtonProps> = (props) => {
  const { children, href } = props

  const router = useRouter()
  const { pathname } = router

  const isSelected = pathname === href

  return (
    <Link href={href}>
      <a
        className="text-left text-2xl font-semibold text-white lg:text-3xl lg:col-span-1"
      >
        <span
          className={
            isSelected
              ? ""
              : "opacity-60 hover:opacity-100"
          }
        >
          {children}
        </span>
      </a>
    </Link>
  )
}

const ExploreNav: React.FC<Props> = (props) => {
  const { activeSubPage, setActiveSubPage } = props

  return (
    <nav className="grid w-full grid-cols-2 mt-12 text-bold lg:grid-cols-8">
      <Option href="/vacancies">
        Vacancies
      </Option>
      <Option href="/companies">
        Companies
      </Option>
      <Option href="/profiles">
        Avatars
      </Option>
      <Option href="/hacks">
        Hacks
      </Option>
    </nav>
  )
}

export default ExploreNav
