import React from 'react'
import Link from 'next/link'

import Card from 'src/components/Card'

export type TVacancy = {
  category: string,
  owner_uuid: string
  price: number,
  time: string,
  sbt_id: string,
}
type Props = {
  data: TVacancy,
}


const Vacancy: React.FC<Props> = (props) => {
  const { data } = props

  const {
    category, owner_uuid, price, time, sbt_id,
  } = data

  const datePosted = (new Date(time)).toUTCString()

  return (

    <Card
      title={category || 'no category'}
      subtitle={`${price}$`}
      href={`/job/${sbt_id}`}
    >
      <span className="text-white">
        {datePosted}
      </span>
    </Card>
  )

 return (
     <div className="bg-[#023047] min-h-[100vh]">
        <main className="flex flex-col items-center lg:px-16 w-full">
        
        
        </main>
    </div>
  )
}

export default Vacancy
