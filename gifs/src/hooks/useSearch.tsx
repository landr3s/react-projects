import { useState } from 'react'

interface props {
  initialKeyword: string
}

export const useSearch = ({ initialKeyword = '' }: props) => {
  const [search, setSearch] = useState<string>(initialKeyword)

  return {
    search,
    setSearch
  }
}
