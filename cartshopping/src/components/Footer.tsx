import React from 'react'
import useFilters from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export default function Footer() {
  const { cart } = useCart()
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
      <h5 className='flex m-0 opacity-80'>{JSON.stringify(cart, null, 2)}</h5>
    </footer>
  )
}
