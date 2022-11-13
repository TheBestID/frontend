import { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from 'src/components/Header'

const BASE_URL = 'http://127.0.0.1:8000'

async function getVacancy(
  {...bodyData}: {
    id: number,
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/vacancy/get_vacancy_by_id`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const res = await response.json()
    return res
  } catch(e) {
    console.log(e)
    return null
  }
}

type Props = {
  data: any,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.vacancyId
  const data = await getVacancy({
    id: Number(id),
  })
  return {
    props: { data },
  }
}

const Vacancy: NextPage<Props> = (props) => {
  const { data } = props

  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Vacancy</title>
        <meta name="description" content="add wallet to register on souldev platform" />
      </Head>

      <Header/>

      <main className="pt-24">
        <span className="text-white">
          {JSON.stringify(data)}
        </span>
      </main>

    </div>
  )
}

export default Vacancy
