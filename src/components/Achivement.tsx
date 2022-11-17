import React from 'react'

export type TAchivement = {
  startTimestamp: string,
  endTimestamp: string,
  company: string,
  position: string,
  description: string,
};

type Props = {
  data: TAchivement
};

const Achivement: React.FC<Props> = (props) => {
  const { data } = props

  const {
    startTimestamp,
    endTimestamp,
    company,
    position,
    description,
  } = data

  const start = (new Date(startTimestamp)).toLocaleString()
  const end = endTimestamp == null
    ? 'now'
    : (new Date(endTimestamp)).toLocaleString()

  return (
    <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full mt-6">
      <div className="flex justify-between">
        <span
          className="text-xl font-medium text-white text"
        >
          {company}
        </span>
        <span className="text-white text-sm">
          {start} - {end}
        </span>
      </div>
      <span className="text-white">
        {position}
      </span>
      <span className="mt-2 text-white opacity-60 mr-">
        {description}
      </span>
    </div>
  )
}

export default Achivement
