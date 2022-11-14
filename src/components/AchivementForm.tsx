import React, { useState } from 'react'
import { useRouter } from 'next/router'


import { TAchivement } from 'src/components/Achivement'
import useLoggedIn from 'src/hooks/useLoggedIn'

const BASE_URL = 'http://127.0.0.1:8000'

async function postAddAchivement(
  {...bodyData}: {
    address: string,
    chainId: number,
    sbt_id: string,
    txHash: string,
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/achievements/add`
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

async function postAddAchivementParams(
  {...bodyData}: {
    from_address: string,
    to_address: string,
    chainId: number,
    data: TAchivement,
  }
): Promise<Array<string | null>> {
  const { address } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/achievements/add_params`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const msgParams = await response.json()
    const { transaction, sbt_id } = msgParams

    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transaction],
    })

    return [txHash, sbt_id]
  } catch(e) {
    console.log(e)
    return [null, null]
  }
}

type Props = {
  close: Function
};

const AchivementForm: React.FC<Props> = (props) => {
  const { close } = props
  const loggedIn = useLoggedIn()
  const router = useRouter()

  const [company, setCompany] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [startTimestamp, setStartTimestamp] = useState<number>(Date.now())
  const [endTimestamp, setEndTimestamp] = useState<number | null>(null)

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
    if (
      company === ''
      || position === ''
      || description === ''
      || startTimestamp === ''
      || endTimestamp === ''
    ) return

    const [
      txHash, sbt_id
    ] = await postAddAchivementParams({
      from_address: address,
      to_address: address,
      chainId,
      data: {
        company,
        position,
        description,
        startTimestamp,
        endTimestamp
      },
    })
    if (txHash == null || sbt_id == null) {
      return
    }

    const res = await postAddAchivement({
      address,
      chainId,
      txHash,
      sbt_id,
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
        Input achivement details
      </h2>
      <div className="h-4 w-full"/>

      <label htmlFor="company" className="p-1">
        <span className="cursor-pointer">
          company:
        </span>
        <input
          className="ml-2 border border-primary"
          type="text"
          id="company"
          value={company}
          onChange={
            (e: React.SyntheticEvent) =>
              setCompany(
                (e.target as HTMLInputElement)
                .value
              )
          }
        />
      </label>

      <label htmlFor="position" className="p-1">
        <span className="cursor-pointer">
          position:
        </span>
        <input
          className="ml-2 border border-primary"
          type="text"
          id="position"
          value={position}
          onChange={
            (e: React.SyntheticEvent) =>
              setPosition(
                (e.target as HTMLInputElement)
                .value
              )
          }
        />
      </label>

      <label htmlFor="startTimestamp" className="p-1">
        <span className="cursor-pointer">
          started:
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
          ended:
        </span>
        <input
          type="checkbox"
          value={endTimestamp != null}
          onChange={
            () =>
              setEndTimestamp(
                endTimestamp == null
                  ? Date.now()
                  : null
              )
          }
        />

        {endTimestamp != null && (
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
        )}
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

export default AchivementForm

