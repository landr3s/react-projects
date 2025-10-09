import { PRODUCTSAPI_URL } from '../conf'
import type { Product } from '../types'

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(PRODUCTSAPI_URL)
  const json: Product[] = await response.json()
  return json
}
