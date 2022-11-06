import { useState, useEffect } from 'react'
const BASE_URL = 'http://127.0.0.1:8000'

async function checkAddress(
  {...bodyData}: {
    address: string,
    chainId: string,
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
    return data.uid
  } catch(e) {
    return null
  }
}

type Res = null | false | number

export default function useLoggedIn(): Res {
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<string | null>(null)
  const [result, setResult] = useState<null | false | number>(null)

  useEffect(() => {
    const fn = async () => {
      if (address == null || chainId == null) {
        return () => {}
      }
      let uid
      try {
        uid = await checkAddress({address, chainId})
      } catch(e) { }
      if (typeof uid === 'number') {
        setResult(uid)
      } else {
        setResult(false)
      }
    }
    fn()
  }, [address, chainId])

  async function onChainConnected(
    {chainId}: {chainId: string}
  ) {
    setChainId(chainId)
  }

  async function onMetamaskConnected(accounts: any) {
    if (
      !Array.isArray(accounts)
      || accounts.length === 0
    ) return

    const address = accounts[0]
    setAddress(address)
  }

  useEffect(() => {
    if (window?.ethereum) {
      const data = {chainId: window.ethereum.networkVersion}
      onChainConnected(data)
      window.ethereum.request({
        method:'eth_requestAccounts'
      }).then(onMetamaskConnected)
    }
  }, [])

  return result
}
