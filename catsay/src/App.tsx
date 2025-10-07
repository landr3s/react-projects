import { useEffect, useState } from 'react'
import './App.css'
import { getFact } from './services/getFact'

const API_CAT_IMAGE_URL = 'https://cataas.com/cat'

function App() {
  const [fact, setFact] = useState('')
  const [catImage, setCatImage] = useState('')

  useEffect(() => {
    const loadFact = async () => {
      setFact(await getFact())
    }

    loadFact()
  }, [])

  const firstFactWord = fact.split(' ')[0]

  useEffect(() => {
    fetch(`${API_CAT_IMAGE_URL}/says/${firstFactWord}?json=true`)
      .then(res => res.json())
      .then(json => setCatImage(json.url))
  }, [fact])

  const handleClick = async () => {
    setFact(await getFact())
  }

  return (
    <div className='app'>
      <button onClick={handleClick}>New Fact</button>
      <div className='app-container'>
        <h4>{fact}</h4>
        <img
          src={`${catImage}`}
          alt={`Image extracted from cat fact`}
        />
      </div>
    </div>
  )
}

export default App
