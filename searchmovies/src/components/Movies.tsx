import type { MovieMapped } from '../types'
import noResults from '../mocks/noResults.json'

interface Props {
  movies: MovieMapped[]
}
function ListOfMovies({ movies }: Props) {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li
          key={movie.id}
          className='movie-card'
        >
          <img
            src={movie.img}
            alt={movie.title}
          />
          <h4>{movie.title}</h4>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  )
}

function WithoutResults() {
  const { Error } = noResults
  return <p>{Error}</p>
}

function Movies({ movies }: Props) {
  const hasMovies = movies.length > 0
  return hasMovies ? <ListOfMovies movies={movies} /> : <WithoutResults />
}

export default Movies
