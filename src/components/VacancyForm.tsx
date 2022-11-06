import React, { useState } from 'react'
import { useRouter } from 'next/router'

import useLoggedIn from 'src/hooks/useLoggedIn'

const BASE_URL = 'http://127.0.0.1:8000'

async function postAddVacancy(
  {...bodyData}: {
    address: string,
    chainId: string,
    price: number,
    category: string,
    info: string,
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
    const msgParams = await response.json()
    console.log(msgParams)

    const params = {...msgParams, from: address}
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [params],
    })

    return txHash
  } catch(e) {
    console.log(e)
    return null
  }
}

const VacancyForm = (props) => {
  const { close } = props
  const loggedIn = useLoggedIn()
  const router = useRouter()
  if (loggedIn === false) {
    router.replace('/add-wallet')
  }
  const [info, setInfo] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [
    category, setCategory
  ] = useState<string>('')

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (loggedIn == null) return
    const { address, chainId } = loggedIn
    if (address == null || chainId == null) return
    const res = await postAddVacancy({
      address, chainId, price, category, info
    })

    close()
  }
  return (
    <form
      onSubmit={onSubmit}
      className="px-4 flex flex-col h-full w-full justify-center"
    >
      <h2 className="text-lg font-bold">
        Input vacancy details
      </h2>
      <div className="h-4 w-full"/>
      <label htmlFor="category" className="p-1">
        category:
        <input
          className="ml-2 border border-primary"
          type="text"
          id="category"
          value={category}
          onChange={
            (e: React.SyntheticEvent) =>
              setCategory(e.target.value)
          }
        />
      </label>
      <label htmlFor="info" className="p-1">
        info:
        <input
          className="ml-2 border border-primary"
          type="text"
          id="info"
          value={info}
          onChange={
            (e: React.SyntheticEvent) =>
              setInfo(e.target.value)
          }
        />
      </label>
      <label htmlFor="price" className="p-1">
        price ETH:
        <input
          className="ml-2 border border-primary"
          type="number"
          id="price"
          value={price}
          onChange={
            (e: React.SyntheticEvent) =>
              setPrice(e.target.value)
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
