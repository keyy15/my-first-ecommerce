import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Singup from './pages/Singup'
import Footer from './components/Footer'
import Login from './pages/Login'
import Wishlist from './pages/Wishlist'
import AddToCart from './pages/AddToCart'
import axios from 'axios'

const App = () => {

  //add to wishlist test
  const [wishListItems, setWishlistItems] = useState([])
  const addToWishlist = item => {
    setWishlistItems(prvItems => [...prvItems, item])
  }

  //add to cart test
  const [cartItems, setCartItems] = useState([])
  const addToCartItems = item => {
    setCartItems(prvItems => [...prvItems, item])
  }

  return (
    <Router>
      <TopNavbar />
      <Navbar wishListItems={wishListItems} cartItems={cartItems} />
      <Routes>
        <Route
          path='/home'
          element={
            <Home
              addToWishlist={addToWishlist}
              addToCartItems={addToCartItems}
            />
          }
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/addtocart' element={<AddToCart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
