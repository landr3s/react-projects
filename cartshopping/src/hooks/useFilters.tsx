import { useContext } from 'react'
import { FiltersContext } from '../context/filtersContext'

function useFilters() {
  const context = useContext(FiltersContext)
  if (!context) {
    throw new Error('useFilters must be inside <FilterProvider>')
  }

  return context
}

export default useFilters
