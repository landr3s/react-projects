import React, { useId, useState } from 'react'

function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value)
    onChange((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section>
      <div>
        <label htmlFor={minPriceFilterId}>Price: </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={minPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value='jewelery'>Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
