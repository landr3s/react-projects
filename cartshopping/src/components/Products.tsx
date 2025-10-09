import type { Product } from '../types'
import { AddToCartIcon } from './Icons'

interface props {
  products: Product[]
}

function Products({ products }: props) {
  return (
    <main className='products'>
      {products.map((product) => (
        <article
          key={product.id}
          className='product-card'
        >
          <div className='product-image'>
            <img
              src={product.image}
              alt={product.title}
              loading='lazy'
            />
          </div>

          <div className='product-info'>
            <h3 className='product-title'>{product.title}</h3>
            <p className='product-price'>${product.price}</p>
          </div>

          <button
            className='product-btn'
            aria-label={`Añadir ${product.title} al carrito`}
          >
            <AddToCartIcon /> Añadir
          </button>
        </article>
      ))}
    </main>
  )
}

export default Products
