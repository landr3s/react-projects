import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const isFirstInput = useRef(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') return setError('Cannot search an empty movie')
    if (search.length < 3) {
      return setError('Movie must be 3 characters or more')
    }

    setError(null)
  }, [search])

  return { search, error, setSearch }
}
