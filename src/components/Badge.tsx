import React from 'react'

type Props = {
  children: React.ReactNode,
}

const Badge: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <div
      className="rounded-xl border border-transparent bg-secondary-25"
    >
      <span
        className="ml-2 mr-2 text-white text-sm lg:text-xl"
      >
        {children}
      </span>
    </div>
  )
}

export default Badge
