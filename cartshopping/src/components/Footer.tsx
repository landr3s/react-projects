import React from 'react'
import useFilters from '../hooks/useFilters'

export default function Footer() {
  const { filters } = useFilters()
  return (
    <footer
      className='
      fixed bottom-4 left-4
      backdrop-blur-md
      px-4 py-2
      flex flex-col gap-1
      bg-black/70
      opacity-95
      text-sm
      rounded-full
    '
    >
      <h4 className='flex m-0 opacity-80'>Filters debugger:</h4>
      <h5 className='flex m-0 opacity-80'>
        {JSON.stringify(filters, null, 2)}
      </h5>
    </footer>
  )
}
