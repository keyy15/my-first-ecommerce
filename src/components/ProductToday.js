import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'
import { GrFavorite, GrView } from 'react-icons/gr'
import axios from 'axios'

const ProductToday = ({ addToWishlist, addToCartItems }) => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:90/php-backend/get-product.php'
      )
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products ', error)
    }
  }
  useEffect(() => {
    fetchProducts()
    calculateCountDown()

    // Start the countdown interval
    const intervalId = setInterval(() => {
      calculateCountDown()
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const [isHovered, setIsHovered] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [visibleItemCount, setVisibleItemCount] = useState(4)
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const handleToFavorite = () => {
    const itemToAdd = products[currentIndex]
    addToWishlist(itemToAdd)
    fetchProducts()
  }

  const handleAddToCart = () => {
    const itemToCart = products[currentIndex]
    addToCartItems(itemToCart)
  }

  const getVisibleItems = () => {
    if (showAll) {
      return products
    } else {
      return products.slice(0, visibleItemCount)
    }
  }

  const handleViewMoreProducts = () => {
    if (visibleItemCount < products.length) {
      setProducts(prvProducts => {
        const slicedItems = prvProducts.slice(0, visibleItemCount)
        const additionalItems = prvProducts.slice(
          visibleItemCount,
          visibleItemCount + products.length
        )

        const viewMoreProducts = slicedItems.concat(additionalItems)

        setVisibleItemCount(prevCount => prevCount + 4)

        return viewMoreProducts
      })
    } else {
      setVisibleItemCount(4)
    }
  }

  const handleNextPrv = () => {
    setCurrentIndex(
      prevIndex =>
        (prevIndex + 1) % Math.ceil(products.length / visibleItemCount)
    )
  }

  const handleBackPrv = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    )
  }

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

  return (
    <div className='w-full h-full flex items-center justify-center mt-40'>
      <div className='w-[80%] h-full flex flex-col gap-4 border-b-2'>
        <div className='flex gap-4 h-[40px]'>
          <p className='text-[#DB4444] border-r-[18px] border-[#DB4444] rounded'></p>
          <p className='text-[#DB4444] text-sm font-semibold font-mono flex items-center'>
            Today's
          </p>
        </div>
        <div className='flex items-center justify-between py-2'>
          <h4 className='text-4xl font-semibold'>Flash Sales</h4>
          <div className='flex items-center justify-center gap-6'>
            <div className='flex flex-col items-center'>
              <p>Days</p>
              <p className='font-bold text-2xl'>{countDown.days}</p>
            </div>
            <p className='text-2xl'>:</p>
            <div className='flex flex-col items-center'>
              <p>Hour</p>
              <p className='font-bold text-2xl'>{countDown.hours}</p>
            </div>
            <p className='text-2xl'>:</p>
            <div className='flex flex-col items-center'>
              <p>Minute</p>
              <p className='font-bold text-2xl'>{countDown.minutes}</p>
            </div>
            <p className='text-2xl'>:</p>
            <div className='flex flex-col items-center'>
              <p>Second</p>
              <p className='font-bold text-2xl'>{countDown.seconds}</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <AiOutlineArrowLeft
              className='bg-[#F5F5F5] text-[#000000] text-3xl rounded-full p-1 cursor-pointer'
              onClick={handleBackPrv}
            />
            <AiOutlineArrowRight
              className='bg-[#F5F5F5] text-[#000000] text-3xl rounded-full p-1 cursor-pointer'
              onClick={handleNextPrv}
            />
          </div>
        </div>
        <div className='w-full h-full grid grid-cols-4 gap-8'>
          {getVisibleItems().map((item, index) => (
            <div
              className={`flex flex-col items-center w-full  ${
                index === currentIndex ? '' : ''
              }
              `}
            >
              <div
                className='w-full h-full bg-[#F5F5F5] relative'
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                key={item.id}
              >
                <img
                  src={`http://localhost:90/php-backend/uploaded/${item.pro_img}`}
                  alt=''
                  className='w-full h-[240px] p-12'
                />
                <p className='absolute top-2 left-2 font-mono bg-[#DB4444] text-white px-3 py-1 text-sm rounded'>
                  -{item.pro_dis}%
                </p>
                <p
                  className='absolute top-2 right-2 font-mono bg-[#FFFFFF] text-black p-2 text-sm rounded-full cursor-pointer hover:bg-[#DB4444]'
                  onClick={handleToFavorite}
                >
                  <GrFavorite className='hover:text-white' />
                </p>
                <p className='absolute top-12 right-2 font-mono bg-[#FFFFFF] text-white p-2 text-sm rounded-full cursor-pointer hover:bg-[#DB4444]'>
                  <GrView />
                </p>
                {isHovered === index && (
                  <p
                    className='absolute bottom-0 text-center bg-black text-white w-full rounded-b p-1 cursor-pointer text-sm'
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </p>
                )}
              </div>
              <div className='w-full h-full mt-2'>
                <div className='flex flex-col items-start gap-2'>
                  <p className='font-bold font-mono'>{item.pro_name}</p>
                  <p className='text-[#050202] text-sm'>${item.pro_price}.00</p>
                  <div className='flex text-[#FFAD33] gap-2'>
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full h-full flex items-center justify-center p-12'>
          <button
            className='bg-[#DB4444] px-12 py-3 text-sm text-white rounded font-mono'
            onClick={handleViewMoreProducts}
          >
            {visibleItemCount < products.length ? 'View More Products' : 'Hide'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductToday