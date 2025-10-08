import { API_KEY, API_URL } from '../conf'
import type { Movie, MovieMapped } from '../types'

interface props {
  search: string
}

export const getMovies = async ({ search }: props): Promise<MovieMapped[]> => {
  const response = await fetch(`${API_URL}?s=${search}&apikey=${API_KEY}`)
  const json: Movie = await response.json()
  const { Search } = json
  const mappedMovies = Search.map(({ imdbID, Title, Poster, Year }) => ({
    id: imdbID,
    year: Year,
    title: Title,
    img: Poster
  }))
  return mappedMovies
}
