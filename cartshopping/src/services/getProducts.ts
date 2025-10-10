import { PRODUCTS_API_URL } from '../conf'
import type { Product } from '../types'

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(PRODUCTS_API_URL)
  const json: Product[] = await response.json()
  return json
}
