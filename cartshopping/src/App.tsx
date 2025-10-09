import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import { useProducts } from './hooks/useProducts'
import Header from './components/Header'

function App() {
  const { products } = useProducts()
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  const sortedProducts = products.filter((product) => {
    return (
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
    )
  })
  return (
    <div>
      <Header onChange={setFilters} />
      <Products products={sortedProducts} />
    </div>
  )
}

export default App
