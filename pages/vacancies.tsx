import React, { useState, useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { BASE_URL } from 'src/constants'

import Vacancy, { TVacancy } from 'src/components/Vacancy'
import Header from 'src/components/Header'
import ExploreNav from 'src/components/ExploreNav'
import Popup from 'src/components/Popup'
import VacancyForm from 'src/components/VacancyForm'
import useLoggedIn from 'src/hooks/useLoggedIn'


async function getVacancies(
  {...bodyData}: {
    value_sorted: string,
    offset: number,
    top_number: number,
    in_asc: boolean
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/vacancy/get_previews_sortby_one`
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
  const data = null
  return {
    props: { data },
  }
}

const Vacancies: NextPage<Props> = (props) => {
  const { data } = props

  const loggedIn = useLoggedIn()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [vacancies, setVacancies] = useState(data)

  useEffect(() => {
    getVacancies({
      value_sorted: 'price',
      offset: 0,
      top_number: null,
      in_asc: true,
    }).then(res => {
      setVacancies(res)
    })
  }, [])

  return (
    <div className="bg-[#023047] min-h-[200vh] h-full">
      <Head>
        <title>Vacancies</title>
        <meta name="description" content="explore all vacancies on Souldev network"/>
      </Head>


      <Header/>

      {isPopupOpen && (
        <Popup
          close={
            (e: React.SyntheticEvent) =>
              setIsPopupOpen(false)
          }
        >
          <VacancyForm
            close={
              (e: React.SyntheticEvent) =>
                setIsPopupOpen(false)
            }
          />
        </Popup>
      )}

      <div className="flex flex-col items-center lg:px-16 w-full pt-32 px-3">
        

        <ExploreNav/>

        <button
          className="rounded-xl w-44 h-12 text-white bg-secondary-25 mt-6"
          onClick={() => setIsPopupOpen(true)}
        >
          Add job opening
        </button>

        <main className ="grid gap-4 grid-cols-1s w-full mt-6 mb-6 p-4 rounded-lg lg:gap-6 lg:grid-cols-4">
          
          {
            Array.isArray(vacancies)
            && (
              vacancies.map(
                (vacancyData: TVacancy, i: number) =>
                  <Vacancy key={i} data={vacancyData}/>
              )
            )
          }
        </main>


      </div>
    </div>
  )
}

export default Vacancies
