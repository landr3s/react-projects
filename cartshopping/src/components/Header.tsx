import Filters from './Filters'

function Header({ onChange }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters onChange={onChange} />
    </header>
  )
}

export default Header
