import React, {
  useState, useEffect, useContext
} from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { BASE_URL } from 'src/constants'

import Achivement, { TAchivement } from 'src/components/Achivement'
import ProfileCV from 'src/components/ProfileCV'
import ProfileHacks from 'src/components/ProfileHacks'
import ProfileHR from 'src/components/ProfileHR'
import ProfileFunds from 'src/components/ProfileFunds'
import ProfileNav from 'src/components/ProfileNav'
import Header from 'src/components/Header'
import Popup from 'src/components/Popup'
import AchivementForm from 'src/components/AchivementForm'

import useLoggedIn from 'src/hooks/useLoggedIn'
import { WalletContext } from 'src/contexts/WalletContext'
import {
  EBlockchain, TUserWallet, TUserData,
} from 'src/types'
import deleteParamsUser from 'src/utils/deleteParamsUser'

type Props = {
  uid: string | undefined,
  achivements: Array<TAchivement>,
  userData: TUserData,
}

async function postDeleteUser(
  {...bodyData}: {
    address: string,
    chainId: number,
    txHash: number,
    blockchain: EBlockchain,
  }
): Promise<number | null> {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/delete`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const data = await response.json()
    const uid = data.uid
    return uid
  } catch(e) {
    return null
  }
}

async function postGetAchivements(bodyData: {
  uid: string,
}) {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/achievements/get_owned_achievement`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const res = await response.json()

    return res.data
  } catch(e) {
    console.log(e)
    return null
  }
}

async function postUserGet(bodyData: {
  uid: string
}) {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/get`
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


const MOCK_GLE = {
  startTimestamp: '13 nov 2020',
  endTimestamp: null,
  company: 'Meta',
  position: 'Chief Executive Officer',
  description: 'I did great things. Mostly attending useless meetings',
}


type WalletProps  = TUserWallet & {
  isOwnPage: boolean;
}

function Wallet({
  address, blockchain, chainId, isOwnPage
}: WalletProps) {
  const deleteWallet = async () => {
    const txHash = await deleteParamsUser({
      address, chainId, blockchain,
    })
    const res = await postDeleteUser({
      address, chainId, blockchain, txHash,
    })
  }

  return (
    <div 
      className="flex border h-12 border-primary rounded-xl p-3 items-center justify-between"
    >
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={
          blockchain === EBlockchain.ETH
          ? `https://etherscan.io/address/${address}`
          : blockchain === EBlockchain.NEAR
          ? `https://explorer.testnet.near.org/accounts/${address}`
          : ''
        }
      >
        <span className="text-[#fff8]">Address</span>
        <span className="text-[#fff8] pl-1 pr-2 underline">
          {address}
        </span>
      </a>
      {isOwnPage && (
        <button
          onClick={() => deleteWallet()}
          className="text-white text-xs bg-[#fff8] p-1 rounded"
        >
          sign out
        </button>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const uid = context?.params?.profile
  const userData = await postUserGet({ uid }) || null
  const achivements = [
  ]
  return {
    props: { userData, achivements, uid },
  }
}

const Profile: NextPage<Props> = (props) => {
  const { userData, achivements: preloadedAchivements, uid } = props
  const username = userData?.username
  const wallets = userData?.wallets || []
  const { wallet } = useContext(WalletContext)

  const loggedIn = useLoggedIn(wallet)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [activeSubPage, setActiveSubPage] = useState('CV')

  const [achivements, setAchivements] = useState(preloadedAchivements)

  useEffect(() => {
    if (uid) {
      postGetAchivements({
        uid,
      }).then(res => setAchivements(res))
    }
  }, [uid])

  let isOwnPage = false
  if (
    loggedIn != null && loggedIn.isAuth === true
  ) {
    isOwnPage = wallets.some(wallet => {
      // fix for blockchain comparison
      return (
        wallet.address.toUpperCase()
        === loggedIn.address.toUpperCase()
      )
    })
  }

  return (
    <div className="bg-[#023047] min-h-[300vh] h-full">

      <Head>
        <title>Profile</title>
        <meta name="description" content="add wallet to register on souldev platform"/>
      </Head>

      {isPopupOpen && (
        <Popup close={
          (e: React.SyntheticEvent) =>
            setIsPopupOpen(false)
          }
        >
          <AchivementForm
            close={
              (e: React.SyntheticEvent) =>
                setIsPopupOpen(false)
            }
          />
        </Popup>
      )}

      <Header/>

      <main className="flex items-center flex-col mr-4 lg:mr-8 ml-4 lg:ml-8 pt-14">

        
        <div className="rounded-2xl w-full bg-[#FFB703] h-60 mt-16 mb-24">
          <div className="mt-40 ml-8">
          <Image src="/danila.svg" alt="Identicon" width="128" height="128" className="rounded-full h-32 w-32 mx-5 my-20"/>
          </div>
        </div>

        <div className="gap-10 flex flex-col w-full mb-6 md:flex-row items-center flex-wrap">
          <span
            className="text-2xl text-white font-medium ml-2 lg:mr-6"
          >
            {username}
          </span>
          {
            wallets.map((
              wallet: TUserWallet, i: number
            ) => 
              <Wallet
                key={i}
                isOwnPage={isOwnPage}
                {...wallet}
              />
            )
          }

          {isOwnPage && (
            <Link href="/add-wallet">
              <a className="h-12 w-1/5 p-2 rounded-xl border-2 border-primary hover:bg-primary font-medium items-center justify-center">
                <div className="text-center">
                  <span className="text-white text-xl">
                    Add wallet
                  </span>
                </div>
              </a>
            </Link>
          )}
        </div>

        {isOwnPage && (
          <button
            className="rounded-xl w-32 h-12 text-white bg-secondary-25 mt-6"
            onClick={() => setIsPopupOpen(true)}
          >
            Add Achivement
          </button>
        )}


        
        <div className="grid lg:gap-5 lg:w-full lg:grid-cols-10">
          
          <ProfileNav
            activeSubPage={activeSubPage}
            setActiveSubPage={setActiveSubPage}
          />

          <div className="lg:mt-1 lg:w-full lg:ml-12 lg:col-span-7">
          {
            activeSubPage === 'CV'
            ? <ProfileCV achivements={achivements}/>
            : activeSubPage === 'Hacks'
            ? <ProfileHacks />
            : activeSubPage === 'HR'
            ? <ProfileHR />
            : activeSubPage === 'Funds'
            ? <ProfileFunds />
            : null
          }
          </div>
        </div>
      </main>

    </div>
  )
}

export default Profile

