import { useContext } from 'react'

import { BASE_URL } from 'src/constants'
import { EBlockchain } from 'src/types'
import { WalletContext } from 'src/contexts/WalletContext'
import sendTransaction from 'src/utils/sendTransaction'

export default async function postMsgParams(
  {...bodyData}: {
    address: string,
    chainId: string,
    github_token: string,
    hash_email: string,
    email_token: string,
    blockchain: EBlockchain,
  }
): Promise<number | null> {
  const { address, blockchain } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/msg_params`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const msgParams = await response.json()

    const txHash = await sendTransaction(
      msgParams,
      address,
      blockchain,
    )

    return txHash
  } catch(e) {
    console.log(e)
    return null
  }
}


