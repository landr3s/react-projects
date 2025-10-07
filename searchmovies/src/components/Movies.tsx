import type { MovieMapped } from '../types'
import noResults from '../mocks/noResults.json'

interface Props {
  movies: MovieMapped[]
}
function ListOfMovies({ movies }: Props) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h4>{movie.title}</h4>
          <span>{movie.year}</span>
          <div>
            <img
              src={movie.img}
              alt={movie.title}
            />
          </div>
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
