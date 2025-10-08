import './App.css'
import Movies from './components/Movies.tsx'
import { useMovies } from './hooks/useMovies.ts'
import { useSearch } from './hooks/useSearch.ts'
import { useRef, useState } from 'react'

function App() {
  const [sort, setSort] = useState(false)

  const { search, error, updateSearch } = useSearch()
  const { getSortedMovies, searchMovies } = useMovies({ search, sort })
  const movies = getSortedMovies()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchMovies()
  }

  const toggleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={updateSearch}
            type='text'
            placeholder='Avengers, Matrix, Guardians of Galaxy Vol. 3'
          />
          <button>Search</button>
          <input
            type='checkbox'
            checked={sort}
            onChange={toggleSort}
          />
          {error && <p style={{ border: 'white', color: 'red' }}>{error}</p>}
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
