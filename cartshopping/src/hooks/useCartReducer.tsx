import { useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducer/cart'
import { ACTION_TYPES, type Product } from '../types'

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product: Product) =>
    dispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: product
    })

  const removeFromCart = (product: Product) =>
    dispatch({
      type: ACTION_TYPES.REMOVE_FROM_CART,
      payload: product
    })

  const clearCart = () =>
    dispatch({
      type: ACTION_TYPES.CLEAR_CART
    })

  return { addToCart, removeFromCart, clearCart, state }
}
