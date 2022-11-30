import { BASE_URL } from 'src/constants'
import { EBlockchain } from 'src/types'
import sendTransaction from 'src/utils/sendTransaction'

export default async function postDeleteMsgParams(
  {...bodyData}: {
    address: string,
    chainId: string,
    blockchain: EBlockchain,
  }
): Promise<number | null> {
  const { address, blockchain } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/delete_params`
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

