import React, { useEffect, useState } from 'react'
import './App.css'
import Movies from './components/Movies.tsx'
import responseMovies from './mocks/responseMovies.json'
import { useMovies } from './hooks/useMovies.ts'

function App() {
  const movies = responseMovies.Search

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    img: movie.Poster,
    year: movie.Year
  }))

  const { search, error, updateSearch, setSearch } = useMovies()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(search)
    setSearch('')
  }

  return (
    <div>
      <header>
        <h1>Movies Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={updateSearch}
            type='text'
            placeholder='Avengers, Matrix, Guardians of Galaxy Vol. 3'
          />
          {error && <p style={{ border: 'white', color: 'red' }}>{error}</p>}
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
