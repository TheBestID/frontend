import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import useLoggedIn from 'src/hooks/useLoggedIn'
import { WalletContext } from 'src/contexts/WalletContext'
import { EBlockchain } from 'src/types'

import {
  postAddParamsVacancy
} from 'src/utils/addParamsVacancy'

const BASE_URL = 'http://127.0.0.1:8000'

async function postAddVacancy(
  {...bodyData}: {
    address: string,
    chainId: number,
    blockchain: EBlockchain,
    sbt_id: string,
    txHash: string,
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/vacancy/add`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const result = await response.json()

    return result
  } catch(e) {
    console.log(e)
    return null
  }
}

type Props = {
  close: Function
};

const VacancyForm: React.FC<Props> = (props) => {
  const { close } = props
  const { wallet } = useContext(WalletContext)
  const loggedIn = useLoggedIn(wallet)
  const router = useRouter()
  if (
    loggedIn != null && loggedIn.isAuth === false
  ) {
    router.replace('/add-wallet')
  }
  const [info, setInfo] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [
    category, setCategory
  ] = useState<string>('')

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (loggedIn == null) return
    const { address, chainId } = loggedIn
    if (address == null || chainId == null) return

    const blockchain =
      wallet === 'near'
      ? EBlockchain.NEAR
      : wallet === 'metamask'
      ? EBlockchain.ETH
      : 'unknown'

    const [
      txHash, sbt_id
    ] = await postAddParamsVacancy({
      address,
      chainId,
      price,
      category,
      info,
      blockchain,
    })

    const result = await postAddVacancy({
      address,
      chainId,
      blockchain,
      txHash,
      sbt_id,
    })

    close()
  }
  return (
    <form
      onSubmit={onSubmit}
      className="px-4 flex flex-col h-full w-full justify-center"
    >
      <h2 className="text-lg font-bold">
        Input job details
      </h2>
      <div className="h-4 w-full"/>
      <label htmlFor="category" className="p-1">
        <span className="cursor-pointer">
          category:
        </span>
        <input
          className="ml-2 border border-primary"
          type="text"
          id="category"
          value={category}
          onChange={
            (e: React.SyntheticEvent) =>
              setCategory(
                (e.target as HTMLInputElement)
                .value
              )
          }
        />
      </label>
      <label htmlFor="info" className="p-1">
        <span className="cursor-pointer">
          info:
        </span>
        <input
          className="ml-2 border border-primary"
          type="text"
          id="info"
          value={info}
          onChange={
            (e: React.SyntheticEvent) =>
              setInfo(
                (e.target as HTMLInputElement)
                .value
              )
          }
        />
      </label>
      <label htmlFor="price" className="p-1">
        <span className="cursor-pointer">
          price NEAR:
        </span>
        <input
          className="ml-2 border border-primary"
          type="text"
          id="price"
          value={price}
          onChange={
            (e: React.SyntheticEvent) =>
              setPrice(Number(
                (e.target as HTMLInputElement)
                .value
              ) || 0)
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

export default VacancyForm

