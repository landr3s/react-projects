import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const isFirstInput = useRef(true)
  const [error, setError] = useState<null | string>(null)

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return

    isFirstInput.current = search === ''
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (isFirstInput.current) return setError(null)
    if (search.length < 3) {
      return setError('Movie must be 3 characters or more')
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error, setSearch }
}
