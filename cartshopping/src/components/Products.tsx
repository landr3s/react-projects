import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import type { Product } from '../types'
import { useCart } from '../hooks/useCart'

interface ProductsProps {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  const { cart, removeFromCart, addToCart } = useCart()

  return (
    <section className='grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2'>
      {products.map((product) => {
        const productInCart = cart.some(
          (item: Product) => item.id === product.id
        )
        return (
          <article
            className='flex flex-col p-4 bg-neutral-900 rounded-lg shadow hover:scale-[1.02] transition gap-2'
            key={product.id}
          >
            <div className='h-32 flex items-center justify-center'>
              <img
                src={product.image}
                alt={product.title}
                className='object-contain max-h-full'
              />
            </div>
            <div className='flex flex-1 text-center flex-col items-center'>
              <h3 className='font-semibold text-lg'>{product.title}</h3>
              <p className='font-bold text-xl'>${product.price}</p>
            </div>
            <button
              className='cursor-pointer bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-full flex flex-col items-center gap-2 w-full'
              onClick={() => {
                productInCart ? removeFromCart(product) : addToCart(product)
              }}
            >
              {productInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </button>
          </article>
        )
      })}
    </section>
  )
}
