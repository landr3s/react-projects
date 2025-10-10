import React from 'react'
import Filters from './Filters'
import Cart from './Cart'

function Header() {
  return (
    <header className='flex items-center justify-between p-4'>
      <h1 className='text-3xl font-bold'>Cart Shopping</h1>

      <Filters />
      <Cart />
    </header>
  )
}

export default Header
