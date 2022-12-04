import React from 'react'
import { STORAGE_BASE_URL } from 'src/constants'

export enum EPictureDescription {
  PROFILE = 'profile',
  BACKGROUND = 'background',
}

export type TAchivement = {
  startTimestamp: string,
  endTimestamp: string,
  company: string,
  position: string,
  description: string,
  image_cid?: string,
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
    image_cid,
  } = data

  const start = (new Date(startTimestamp)).toUTCString()
  const end = endTimestamp == null
    ? 'now'
    : (new Date(endTimestamp)).toUTCString()

  return (
    <div
      className="bg-contain bg-no-repeat bg-right flex flex-col border border-secondary-25 p-3 rounded-xl w-full mt-6"
      style={{
        backgroundImage: image_cid ? `url(${STORAGE_BASE_URL}/${image_cid})` : '',
      }}
    >
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
