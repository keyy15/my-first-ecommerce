import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'
import { GrFavorite, GrView } from 'react-icons/gr'
import axios from 'axios'
import PS5 from '../assets/ps5.jpg'
import WomanCollection from '../assets/womancollection.jpg'
import JBL from '../assets/JBL.jpg'
import Amazone from '../assets/amazone.webp'
import Gucci from '../assets/gucci.jpg'

const Featured = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:90/php-backend/get-product.php'
      )
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  const [isHovered, setIsHovered] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [visibleItemCount, setVisibleItemCount] = useState(8)
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

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

  return (
    <div className='w-full h-full flex items-center justify-center mt-40'>
      <div className='w-[80%] h-full flex flex-col gap-4 border-b-2'>
        <div className='flex gap-4 h-[40px]'>
          <p className='text-[#DB4444] border-r-[18px] border-[#DB4444] rounded'></p>
          <p className='text-[#DB4444] text-sm font-semibold font-mono flex items-center'>
            Featured
          </p>
        </div>
        <div className='flex items-center justify-between py-2'>
          <h4 className='text-4xl font-semibold'>New Arrival</h4>
        </div>
        <div className='w-full h-[580px] flex items-center justify-center gap-4'>
          <div className='w-full h-full relative'>
            <img src={PS5} alt='' className='w-full h-full rounded' />
            <div className='absolute bottom-10 left-10 flex flex-col items-start gap-3'>
              <h2 className='text-white text-xl font-medium'>Play Station 5</h2>
              <p className='text-white text-[12px] font-mono'>
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className='border-b-[2px] border-[#858585] text-white'>
                Shop Now
              </button>
            </div>
          </div>
          <div className='w-full h-full flex flex-col gap-4'>
            <div className='w-full h-full relative'>
              <img
                src={WomanCollection}
                alt=''
                className='w-full h-full rounded'
              />
              <div className='absolute bottom-5 left-5 flex flex-col items-start gap-3'>
                <h2 className='text-white text-xl font-medium'>
                  Woman Collection
                </h2>
                <p className='text-white text-[12px] font-mono'>
                  Featured woman collection that give you another vibe.
                </p>
                <button className='border-b-[2px] border-[#858585] text-white'>
                  Shop Now
                </button>
              </div>
            </div>
            <div className='w-full h-full flex items-center justify-between gap-6'>
              <div className='w-full h-full relative'>
                <img src={Amazone} alt='' className='w-full h-full rounded' />
                <div className='absolute bottom-5 left-5 flex flex-col items-start gap-3'>
                  <h2 className='text-white text-xl font-medium'>
                    Speakers
                  </h2>
                  <p className='text-white text-[12px] font-mono'>
                    Amazon wireless speakers.
                  </p>
                  <button className='border-b-[2px] border-[#858585] text-white'>
                    Shop Now
                  </button>
                </div>
              </div>
              <div className='w-full h-full relative'>
                <img src={Gucci} alt='' className='w-full h-full rounded' />
                <div className='absolute bottom-5 left-5 flex flex-col items-start gap-3'>
                  <h2 className='text-white text-xl font-medium'>
                    Perfume
                  </h2>
                  <p className='text-white text-[12px] font-mono'>
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className='border-b-[2px] border-[#858585] text-white'>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
