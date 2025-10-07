import { useEffect, useState } from 'react'

export const useMovies = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState<null | string>(null)

  const updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (search.length < 3) {
      return setError('Movie must be 3 characters or more')
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error, setSearch }
}
