import React from 'react'

export type TVacancy = {
  category: string,
  owner_uuid: string
  price: number,
  timestamp: string,
}
type Props = {
  data: TVacancy,
}


const Vacancy: React.FC<Props> = (props) => {
  const { data } = props

  const {
    category, owner_uuid, price, timestamp
  } = data

  return (
    <div className="w-full bg-white p-1 rounded mb-4">
      <span className="text-red-300">{category}</span>
      <span>{owner_uuid}</span>
      <span>{price}</span>
      <span>{timestamp}</span>
    </div>
  )
}

export default Vacancy
