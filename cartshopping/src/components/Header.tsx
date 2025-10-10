import React from 'react'
import Filters from './Filters'

function Header() {
  return (
    <header className='text-center mb-4'>
      <h1 className='text-3xl font-bold'>Cart Shopping</h1>
      <Filters />
    </header>
  )
}

export default Header
