import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { TAchivement } from 'src/components/Achivement'
import { EBlockchain } from 'src/types'
import useLoggedIn from 'src/hooks/useLoggedIn'
import { WalletContext } from 'src/contexts/WalletContext'

const BASE_URL = 'http://127.0.0.1:8000'

async function postAddAchivement(
  {...bodyData}: {
    address: string,
    chainId: number,
    sbt_id: string,
    txHash: string,
    blockchain: EBlockchain,
  }
): Promise<number | null> {
  const { address } = bodyData
  const body = new FormData(bodyData)
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
    blockchain: EBlockchain,
    image: any,
  }
): Promise<Array<string | null>> {
  const { address, image } = bodyData
  const body = JSON.stringify(bodyData)
  if (image != null) {
    body.append('image', image)
  }
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
  const { wallet } = useContext(WalletContext)
  const blockchain =
    wallet === 'near'
    ? EBlockchain.NEAR
    : wallet === 'metamask'
    ? EBlockchain.ETH
    : 'unknown'

  const loggedIn = useLoggedIn(wallet)
  const router = useRouter()

  const [to, setTo] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [startTimestamp, setStartTimestamp] = useState<number>(Date.now())
  const [endTimestamp, setEndTimestamp] = useState<number | null>(null)
  const [file, setFile] = useState<string>('')

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
      || startTimestamp === ''
      || endTimestamp === ''
    ) return

    const [
      txHash, sbt_id
    ] = await postAddAchivementParams({
      from_address: address,
      to_address: to ? to : address,
      chainId,
      blockchain,
      data: {
        company,
        position,
        description,
        startTimestamp,
        endTimestamp
      },
      image: file ? file : null,
    })
    if (txHash == null || sbt_id == null) {
      return
    }

    const res = await postAddAchivement({
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
        Input achivement details
      </h2>
      <div className="h-4 w-full"/>

      <label htmlFor="to" className="flex flex-col p-1">
        <span className="cursor-pointer">
          send this achivement to address:
        </span>
        <input
          className="ml-2 border border-primary"
          type="text"
          id="to"
          value={to}
          onChange={
            (e: React.SyntheticEvent) =>
              setTo(
                (e.target as HTMLInputElement)
                .value
              )
          }
          placeholder="me"
        />
      </label>

      <label htmlFor="company" className="flex flex-col p-1">
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

      <label htmlFor="position" className="flex flex-col p-1">
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

      <label htmlFor="startTimestamp" className="flex flex-col p-1">
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

      <label htmlFor="endTimestamp" className="flex flex-col p-1">
        <div className="flex items-center">
          <span className="cursor-pointer">
            ended:
          </span>
          <input
            type="checkbox"
            value={endTimestamp != null}
            className="ml-2"
            onChange={
              () =>
                setEndTimestamp(
                  endTimestamp == null
                    ? Date.now()
                    : null
                )
            }
          />
        </div>

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

      <label htmlFor="description" className="flex flex-col p-1">
        <span className="cursor-pointer">
          description:
        </span>
        <textarea
          className="ml-2 border border-primary"
          id="description"
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

      <label htmlFor="file" className="flex flex-col p-1">
        <span className="cursor-pointer">
          attach file:
        </span>
        <input
          type="file"
          className="ml-2 border border-primary"
          id="file"
          onChange={
            (e: React.SyntheticEvent) =>
              setFile(
                (e.target as HTMLInputElement)
                .files[0]
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

