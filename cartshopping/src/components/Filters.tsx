import { useId } from 'react'
import useFilters from '../hooks/useFilters'

function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: +e.target.value
    }))
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value
    }))
  }

  return (
    <section className='flex justify-between items-center flex-wrap gap-4'>
      <div className='flex items-center gap-2'>
        <label
          htmlFor={minPriceId}
          className='font-medium'
        >
          Price:
        </label>
        <input
          type='range'
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
          id={minPriceId}
          className='accent-blue-500'
        />
        <span>${filters.minPrice}</span>
      </div>
      <div className='flex gap-2 items-center'>
        <label
          htmlFor={categoryId}
          className='font-medium'
        >
          Category:
        </label>
        <select
          id={categoryId}
          onChange={handleChangeCategory}
          className='bg-neutral-800 p-1 rounded'
        >
          <option value='all'>All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value='jewelery'>Jewelery</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
