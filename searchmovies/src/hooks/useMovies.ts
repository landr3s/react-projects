import { useCallback, useEffect, useState } from 'react'
import type { Movie, MovieMapped, Search } from '../types'
import { getMovies } from '../services/getMovies'

interface props {
  search: string
  sort: boolean
}

export const useMovies = ({ search, sort }: props) => {
  const [movies, setMovies] = useState<MovieMapped[]>([])

  const searchMovies = () => {
    getMovies({ search }).then((newMovies) => setMovies(newMovies))
  }

  const getSortedMovies = useCallback(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { getSortedMovies, searchMovies }
}
