import { BASE_URL } from 'src/constants'

export enum EBlockchain {
  ETH = 'eth',
  NEAR = 'near',
}

export default async function checkAddress(
  {...bodyData}: {
    address: string,
    chainId: number,
    blockchain: EBlockchain,
  }
): Promise<number | null> {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/user/check`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const data = await response.json()
    return data.uuid
  } catch(e) {
    return null
  }
}
