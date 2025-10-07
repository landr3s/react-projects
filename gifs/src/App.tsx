import { useEffect, useState } from 'react'
import type { Datum } from './types'
import './App.css'
import { getGif } from './services/getGif'
import ListOfGifs from './components/ListOfGifs'
import { useSearch } from './hooks/useSearch'
function App() {
  const { search, setSearch } = useSearch({ initialKeyword: 'panda' })
  return (
    <>
      <label htmlFor=''>
        Search:{' '}
        <input
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </label>
      <ListOfGifs params={{ keyword: search }} />
    </>
  )
}

export default App
