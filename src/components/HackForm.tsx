import React, {
  useState, useEffect, useContext
} from 'react'
import { useRouter } from 'next/router'

import {
  WalletContext
} from 'src/contexts/WalletContext'
import useLoggedIn from 'src/hooks/useLoggedIn'
import { postAddParamsHacks } from 'src/utils/addParamsHacks'


const BASE_URL = 'http://127.0.0.1:8000'

async function postAddHacks(
  {...bodyData}: {
    address: string,
    chainId: number,
    sbt_id: string,
    txHash: string,
    blockchain: EBlockchain,
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/hacks/add`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const res = await response.json()

    return res.uid
  } catch(e) {
    console.log(e)
    return null
  }
}

type Props = {
  close: Function
};

const HackForm: React.FC<Props> = (props) => {
  const { close } = props
  const { wallet } = useContext(WalletContext)
  const loggedIn = useLoggedIn(wallet)
  const router = useRouter()

  const [ price, setPrice ] = useState<number>(0)
  const [
    hackaton_name, setHackatonName
  ] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [startTimestamp, setStartTimestamp] = useState<number>(Date.now())
  const [endTimestamp, setEndTimestamp] = useState<number>(Date.now())

  if (
    loggedIn != null && loggedIn.isAuth === false
  ) {
    router.replace('/add-wallet')
  }

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (loggedIn == null) return
    const { address, chainId } = loggedIn
    if (address == null || chainId == null) return

    const [
      txHash, sbt_id
    ] = await postAddParamsHacks({
      address,
      chainId,
      blockchain,
      hackaton_name,
      description,
      /*
      theme,
      base_color,
      font_head,
      font_par,
      back_url,
      logo_url,
      price,
      pool,
      descr_price,
      sbt_url,
      task_descr,
      social_link,
      category,
      */
    })
    if (txHash == null || sbt_id == null) {
      return
    }

    const res = await postAddHacks({
      address,
      chainId,
      txHash,
      sbt_id,
      blockchain,
    })

    if (typeof res === 'number') {
      close()
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="px-4 flex flex-col h-full w-full justify-center"
    >
      <h2 className="text-lg font-bold">
        Input hackaton details
      </h2>
      <div className="h-4 w-full"/>

      <label htmlFor="hackaton_name" className="p-1">
        <span className="cursor-pointer">
          hackaton name:
        </span>
        <input
          className="ml-2 border border-primary"
          type="text"
          id="hackaton_name"
          value={hackaton_name}
          onChange={
            (e: React.SyntheticEvent) =>
              setHackatonName(
                (e.target as HTMLInputElement)
                .value
              )
          }
        />
      </label>

      <label htmlFor="startTimestamp" className="p-1">
        <span className="cursor-pointer">
          starting:
        </span>
        <input
          className="ml-2 border border-primary"
          type="date"
          id="startTimestamp"
          value={new Date(startTimestamp).toISOString().split('T')[0]}
          onChange={
            (e: React.SyntheticEvent) =>
              setStartTimestamp(new Date(
                (e.target as HTMLInputElement)
                .value
              ).getTime())
          }
        />
      </label>

      <label htmlFor="endTimestamp" className="p-1">
        <span className="cursor-pointer">
          ending:
        </span>
        <input
          className="ml-2 border border-primary"
          type="date"
          id="endTimestamp"
          value={new Date(endTimestamp).toISOString().split('T')[0]}
          onChange={
            (e: React.SyntheticEvent) =>
              setEndTimestamp(new Date(
                (e.target as HTMLInputElement)
                .value
              ).getTime())
          }
        />
      </label>

      <label htmlFor="description" className="p-1">
        <span className="cursor-pointer">
          description:
        </span>
        <textarea
          className="ml-2 border border-primary"
          id="category"
          value={description}
          onChange={
            (e: React.SyntheticEvent) =>
              setDescription(
                (e.target as HTMLTextAreaElement)
                .value
              )
          }
        />
      </label>

      <button
        className="p-1 rounded-lg border border-primary justify-self-end"
      >
        Submit
      </button>
      <div className="h-12 w-full"/>
    </form>
  )
}

export default HackForm

