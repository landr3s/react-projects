import type { Datum, Images } from '../types'

interface props {
  id: string
  title: string
  images: Images
}

function Gif({ id, title, images }: props) {
  return (
    <div
      className='gif-container'
      key={id}
    >
      <h4>{title}</h4>
      <img
        src={images.fixed_height.url}
        alt={title}
      />
    </div>
  )
}

export default Gif
