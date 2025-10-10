export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  quantity: number
}

export interface Cart {
  products: Product[]
}

// Cart reducer types

export const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
} as const

export type CartProduct = Product & { quantity: number }

export type CartState = CartProduct[]

export type CartAction =
  | { type: typeof ACTION_TYPES.ADD_TO_CART; payload: Product }
  | { type: typeof ACTION_TYPES.REMOVE_FROM_CART; payload: Product }
  | { type: typeof ACTION_TYPES.CLEAR_CART }

export interface CartContextType {
  cart: CartState
  addToCart: (product: Product) => void
  clearCart: () => void
  removeFromCart: (product: Product) => void
}
