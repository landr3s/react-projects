import React, { createContext, type ReactNode } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'
import type { CartContextType } from '../types'

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
