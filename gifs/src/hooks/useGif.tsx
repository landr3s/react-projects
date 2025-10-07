import { useEffect, useState } from 'react'
import { getGif } from '../services/getGif'
import type { Datum } from '../types'

interface props {
  keyword: string
}

export const useGif = ({ keyword }: props) => {
  const [gifs, setGifs] = useState<Datum[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getGif({ keyword }).then(newGifs => {
      setGifs(newGifs)
      setLoading(false)
    })
  }, [keyword])
  return { gifs, loading }
}
