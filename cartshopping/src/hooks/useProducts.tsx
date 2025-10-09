import { useEffect, useState } from 'react'
import { getProducts } from '../services/getProducts'
import type { Product } from '../types'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getProducts().then((initialProducts) => setProducts(initialProducts))
  }, [])
  return { products }
}
