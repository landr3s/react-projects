import { ACTION_TYPES, type CartAction, type CartState } from '../types'

export const cartInitialState: CartState = (() => {
  const stored = window.localStorage.getItem('cart')
  try {
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
})()

export const emptyCart: CartState = []
// update localStorage with state for car

export const updateLocalStorage = (state: CartState) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      const existingProduct = state.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existingProduct > -1) {
        const newState = [...state]
        newState[existingProduct].quantity += 1
        updateLocalStorage(newState)
        return newState
      }
      const newState = [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }
    case ACTION_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item.id !== action.payload.id)
      updateLocalStorage(newState)
      return newState
    }
    case ACTION_TYPES.CLEAR_CART: {
      const emptyCart: CartState = []
      updateLocalStorage(emptyCart)
      return emptyCart
    }
    default:
      return state
  }
}
