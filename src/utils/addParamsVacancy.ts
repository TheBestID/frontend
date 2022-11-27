import sendTransaction from 'src/utils/sendTransaction'
const BASE_URL = 'http://127.0.0.1:8000'

export async function postAddParamsVacancy(
  {...bodyData}: {
    address: string,
    chainId: number,
    blockchain: EBlockchain,
    price: number,
    category: string,
    info: string,
  }
): Promise<Array<string | null>> {
  const { address, blockchain } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/vacancy/add_params`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const {
      transaction, sbt_id
    } = await response.json()

    const txHash = await sendTransaction(
      transaction,
      address,
      blockchain,
    )

    return [ txHash, sbt_id ]
  } catch(e) {
    console.log(e)
    return null
  }
}
