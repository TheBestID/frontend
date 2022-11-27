import sendTransaction from 'src/utils/sendTransaction'
const BASE_URL = 'http://127.0.0.1:8000'

export async function postAddParamsHacks(
  {...bodyData}: {
    address: string,
    chainId: number,
    blockchain: EBlockchain,
    theme: string,
    base_color: string,
    font_head: string,
    font_par: string,
    hackaton_name: string,
    description: string,
    back_url: string,
    logo_url: string,
    price: number,
    pool: string,
    descr_price: string,
    sbt_url: string,
    task_descr: string,
    social_link: string,
    category: string,
  }
): Promise<Array<string | null>> {
  const { address, blockchain } = bodyData
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/hacks/add_params`
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
