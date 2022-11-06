import React, { useState } from 'react'
import { useRouter } from 'next/router'

import useLoggedIn from 'src/hooks/useLoggedIn'

const VacancyForm = (props) => {
  const { close } = props
  const loggedIn = useLoggedIn()
  const router = useRouter()
  if (loggedIn === false) {
    router.replace('/add-wallet')
  }
  const [ info, setInfo ] = useState<string>('')
  const [
    category, setCategory
  ] = useState<string>('')

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (loggedIn == null) return
    const { address, chainId } = loggedIn
    if (address == null || chainId == null) return

    close()
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="category">
        category:
        <input
          type="text"
          id="category"
          value={category}
          onChange={
            (e: React.SyntheticEvent) =>
              setCategory(e.target.value)
          }
        />
      </label>
      <label htmlFor="info">
        info:
        <input
          type="text"
          id="info"
          value={info}
          onChange={
            (e: React.SyntheticEvent) =>
              setInfo(e.target.value)
          }
        />
      </label>
      <button
        className="p-1 rounded-lg border border-primary"
      >
        Submit
      </button>
    </form>
  )
}

export default VacancyForm
