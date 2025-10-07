import { useState } from 'react'
import type { Datum } from '../types'
import Gif from './Gif'
import { useGif } from '../hooks/useGif'

interface props {
  params: { keyword: string }
}

function ListOfGifs({ params }: props) {
  const { keyword } = params
  const { gifs, loading } = useGif({ keyword })
  return loading ? (
    <p>Loading...</p>
  ) : (
    <section className='app-container'>
      {gifs.map(({ id, title, images }) => (
        <Gif
          id={id}
          title={title}
          images={images}
        />
      ))}
    </section>
  )
}

export default ListOfGifs
