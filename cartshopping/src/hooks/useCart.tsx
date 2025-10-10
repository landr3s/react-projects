import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('Cart context not provided')
  }

  const { cart, addToCart, clearCart, removeFromCart } = context

  return { cart, addToCart, clearCart, removeFromCart }
}
