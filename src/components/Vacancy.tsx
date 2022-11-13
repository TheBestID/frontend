import React from 'react'
import Link from 'next/link'

import Card from 'src/components/Card'

export type TVacancy = {
  category: string,
  owner_uuid: string
  price: number,
  timestamp: string,
  id: number,
}
type Props = {
  data: TVacancy,
}


const Vacancy: React.FC<Props> = (props) => {
  const { data } = props

  const {
    category, owner_uuid, price, timestamp, id,
  } = data

  const datePosted = (new Date(timestamp)).toString()

  return (
    <Card
      title={category || 'no category'}
      subtitle={`${price}$`}
      href={`/vacancy/${id}`}
    >
      <span className="text-white">
        {datePosted}
      </span>
    </Card>
  )
}

export default Vacancy
