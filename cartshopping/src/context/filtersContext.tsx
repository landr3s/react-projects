import { createContext, useState, type ReactNode } from 'react'

interface FiltersState {
  minPrice: number
  category: string
}

interface FiltersContextType {
  filters: FiltersState
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
)

interface FilterProviderProps {
  children: ReactNode
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filters, setFilters] = useState<FiltersState>({
    minPrice: 0,
    category: 'all'
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
