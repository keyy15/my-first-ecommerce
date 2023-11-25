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
  //fetch data from api
  const [productsAPIs, setProductsAPIs] = useState([])
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:90/php-backend/get-product.php'
      )
      setProductsAPIs(response.data)
    } catch (error) {
      console.error('Error fetching products ', error)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

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

  //Countdown
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const calculateCountDown = () => {
    const now = new Date()
    const endOfDay = new Date(now)

    endOfDay.setHours(23, 59, 59, 999)

    const timeDiff = endOfDay - now
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

    setCountDown({ days, hours, minutes, seconds })
  }

  //view product
  const [visibleItemCount, setVisibleItemCount] = useState(4)
  const handleViewMoreProducts = () => {
    if (visibleItemCount < productsAPIs.length) {
      setProductsAPIs(prvProducts => {
        const slicedItems = prvProducts.slice(0, visibleItemCount)
        const additionalItems = prvProducts.slice(
          visibleItemCount,
          visibleItemCount + productsAPIs.length
        )

        const viewMoreProducts = slicedItems.concat(additionalItems)

        setVisibleItemCount(prevCount => prevCount + 4)

        return viewMoreProducts
      })
    } else {
      setVisibleItemCount(4)
    }
  }

  //get visibleitem
  const [showAll, setShowAll] = useState(false)
  const getVisibleItems = () => {
    if (showAll) {
      return productsAPIs
    } else {
      return productsAPIs.slice(0, visibleItemCount)
    }
  }

  //handle remove item add to favorite product
  const handleDeleteFromWishlist = index => {
    const updatedWishlist = [...wishListItems]
    updatedWishlist.splice(index, 1)
    setWishlistItems(updatedWishlist)
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
              productsAPIs={productsAPIs}
              setProductsAPIs={setProductsAPIs}
              fetchProducts={fetchProducts}
              calculateCountDown={calculateCountDown}
              countDown={countDown}
              handleViewMoreProducts={handleViewMoreProducts}
              visibleItemCount={visibleItemCount}
              getVisibleItems={getVisibleItems}
            />
          }
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/wishlist'
          element={
            <Wishlist
              wishListItems={wishListItems}
              productsAPIs={productsAPIs}
              handleViewMoreProducts={handleViewMoreProducts}
              getVisibleItems={getVisibleItems}
              handleDeleteFromWishlist={handleDeleteFromWishlist}
            />
          }
        />
        <Route path='/addtocart' element={<AddToCart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
