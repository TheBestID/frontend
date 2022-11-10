import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Popup from 'src/components/Popup'
import VacancyForm from 'src/components/VacancyForm'
import useLoggedIn from 'src/hooks/useLoggedIn'

const Vacancies: NextPage = () => {
  const loggedIn = useLoggedIn()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div className="bg-black min-h-[100vh] h-full">
      <Head>
        <title>Vacancies</title>
        <meta name="description" content="explore all vacancies on Souldev network"/>
      </Head>

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
    </div>
  )
}

export default Vacancies

