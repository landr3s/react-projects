import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import { useProducts } from './hooks/useProducts'

function App() {
  const { products } = useProducts()
  return (
    <div className=' min-h-[100vh] bg-black text-white p-2'>
      <div className='max-w-4xl mx-auto flex flex-col gap-4'>
        <Header />
        <main className='flex-1'>
          <Products products={products} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
