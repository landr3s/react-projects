import { useId, useState } from 'react'
import { CartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import type { Product } from '../types'

interface CartItemProps {
  image: string
  title: string
  price: number
  addToCart: () => void
  quantity: number
}

function CartItem({ image, title, price, addToCart, quantity }: CartItemProps) {
  return (
    <li>
      <div>
        <img
          src={image}
          alt={title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <footer>
        <small>{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

function Cart() {
  const [open, setOpen] = useState(false)
  const { cart, addToCart, clearCart } = useCart()
  return (
    <div className='relative'>
      <button
        className='relative cursor-pointer p-2 bg-blue-600 rounded-full hover:bg-blue-700 size-10'
        onClick={() => setOpen((prev) => !prev)}
      >
        <CartIcon />
      </button>
      {/* Overlay */}
      {open && (
        <div
          className='fixed inset-0 bg-black/50'
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-neutral-900 text-white shadow-lg p-4 transform flex flex-col justify-between
           transition-transform duration-300 z-50
          ${open ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <ul className='overflow-y-auto flex-1'>
          {cart.map((product: Product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button
          onClick={clearCart}
          className='flex justify-center items-center bg-red-600 hover:bg-red-700 transition px-4 py-2 mt-4 w-full rounded-full'
        >
          <RemoveFromCartIcon />
        </button>
      </aside>
    </div>
  )
}

export default Cart
