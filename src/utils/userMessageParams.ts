import { useContext } from 'react'

import { BASE_URL } from 'src/constants'
import { WalletContext } from 'src/contexts/WalletContext'

async function postMsgParams(
  {...bodyData}: {
    address: string,
    chainId: string,
    github_token: string,
    hash_email: string,
    email_token: string,
  }
): Promise<number | null> {
  const { wallet } = useContext(WalletContext)
  blockchain =
    wallet === 'metamask'
    ? EBlockchain.ETH
    : wallet === 'near'
    ? EBlockchain.NEAR
    : 'unknown'
  bodyData.blockchain = blockchain

  const { address } = bodyData
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


