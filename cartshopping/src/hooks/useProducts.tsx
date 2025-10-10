import { useEffect, useState } from 'react'
import useFilters from './useFilters'
import { getProducts } from '../services/getProducts'
import type { Product } from '../types'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { filters } = useFilters()
  useEffect(() => {
    getProducts().then((initialProducts) => setProducts(initialProducts))
  }, [])

  const filteredProducts = products.filter(
    (product) =>
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
  )

  return { products: filteredProducts }
}
