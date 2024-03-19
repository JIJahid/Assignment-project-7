import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Blog from './components/Blogs/Blog'
import Cart from './components/ShoppingCart/Cart'
import { useState } from 'react'


function App() {
  const [cart , setCart] = useState([]);
  const handleAddToCart = blog => {
    const newCart = [...cart , blog]
     setCart(newCart)
  }

  return (
    <>
        <Header></Header>
        <Hero></Hero>

        <main className='max-w-[1280px] my-10 m-auto gap-5 border-none'>
            <div className=' gap-5 flex '>
            <Blog handleAddToCart={handleAddToCart} className='flex'></Blog>
            <Cart cart={cart}></Cart>
            </div>
        </main>
    </>
  )
}

export default App
