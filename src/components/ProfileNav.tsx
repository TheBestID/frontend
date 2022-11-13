import React from 'react'

type ButtonProps = {
  children: React.ReactNode,
  onClick: Function,
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick } = props
  return (
    <button
      onClick={() => onClick()}
      className="lg:border lg:p-3 lg:rounded-xl lg:hover:bg-secondary-25 lg:items-center lg:border-secondary-25 underline decoration-gray-300 text-xl lg:text-3xl font-semibold text-white lg:text-left">
      {children}
    </button>
  )
}

type Props = {
  activeSubPage: string,
  setActiveSubPage: Function,
}

const ProfileNav: React.FC<Props> = (props) => {
  const { activeSubPage, setActiveSubPage } = props

  return (
    <aside className="grid w-full lg:w-64 lg:col-span-2 lg:h-12 gap-10 lg:gap-4 grid-cols-4 lg:grid-cols-1 mt-12 lg:mt-7 text-bold pr-5">
      <Button
        onClick={() => {setActiveSubPage('CV')}}
        isActive={activeSubPage === 'CV'}
      >
        CV
      </Button>
      <Button
        onClick={() => {setActiveSubPage('Hacks')}}
        isActive={activeSubPage === 'Hacks'}
      >
        Hacks
      </Button>
      <Button
        onClick={() => {setActiveSubPage('HR')}}
        isActive={activeSubPage === 'HR'}
      >
        HR
      </Button>
      <Button
        onClick={() => {setActiveSubPage('Funds')}}
        isActive={activeSubPage === 'Funds'}
      >
        Funds
      </Button>
    </aside>
  )
}

export default ProfileNav
