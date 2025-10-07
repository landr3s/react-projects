import { API_KEY, API_URL } from '../conf'
import type { Datum, GIF } from '../types'

interface props {
  keyword: string
}

export const getGif = async ({ keyword }: props): Promise<Datum[]> => {
  const response = await fetch(
    `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}`
  )
  const json: GIF = await response.json()
  return json.data
}
