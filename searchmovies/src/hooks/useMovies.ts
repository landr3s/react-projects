import { useCallback, useMemo, useRef, useState } from 'react'
import type { MovieMapped } from '../types'
import { getMovies } from '../services/getMovies'

interface props {
  search: string
  sort: boolean
}

export const useMovies = ({ search, sort }: props) => {
  const [movies, setMovies] = useState<MovieMapped[]>([])
  const searchRef = useRef(search)

  const searchMovies = useCallback(async (search: string) => {
    if (searchRef.current === search) return
    getMovies({ search }).then((newMovies) => {
      searchRef.current = search
      setMovies(newMovies)
    })
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, searchMovies }
}
