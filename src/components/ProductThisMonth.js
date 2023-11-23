import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Controller from '../assets/controller.png'
import { AiTwotoneStar } from 'react-icons/ai'
import { GrFavorite, GrView } from 'react-icons/gr'
import Keyboard from '../assets/keyboard.png'
import Chair from '../assets/chair.png'
import Monitor from '../assets/monitor.png'
import Cover from '../assets/cover.png'

const ProductThisMonth = () => {
  const itemList = [
    { title: 'Controller', img: Controller },
    { title: 'Keyboard', img: Keyboard },
    { title: 'Monitor', img: Monitor },
    { title: 'Chair', img: Chair },
    { title: 'Keyboard', img: Keyboard },
    { title: 'Monitor', img: Monitor }
  ]
  const [isHovered, setIsHovered] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextPrv = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % itemList.length)
  }

  const handleBackPrv = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? itemList.length - 1 : prevIndex - 1
    )
  }

  // Create a function to get the visible items based on the currentIndex
  const getVisibleItems = () => {
    return [
      itemList[(currentIndex + 0) % itemList.length],
      itemList[(currentIndex + 1) % itemList.length],
      itemList[(currentIndex + 2) % itemList.length],
      itemList[(currentIndex + 3) % itemList.length]
    ]
  }

  const visibleItems = getVisibleItems()

  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-20'>
      <div className='w-[80%] h-full flex flex-col gap-4 border-b-2'>
        <div className='flex gap-4 h-[40px]'>
          <p className='text-[#DB4444] border-r-[18px] border-[#DB4444] rounded'></p>
          <p className='text-[#DB4444] text-sm font-semibold font-mono flex items-center'>
            This Month
          </p>
        </div>
        <div className='flex items-center justify-between py-2'>
          <h4 className='text-4xl font-semibold'>Best Selling Products</h4>
          <div className='flex items-center justify-center gap-2'>
            <button className='bg-[#DB4444] px-8 py-2 rounded text-white'>
              View All
            </button>
          </div>
        </div>
        <div className='w-full h-full flex items-center justify-between gap-8 mt-8'>
          {visibleItems.map((item, index) => (
            <div
              className={`flex flex-col items-center w-1/4 h-[240px] transition-transform ${
                index === currentIndex ? '' : ''
              }
              `}
            >
              <div
                className='w-full h-full bg-[#F5F5F5] relative group'
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                key={index}
              >
                <img
                  src={item.img}
                  alt=''
                  className='w-full h-[240px] p-12 bg-center'
                />
                <p className='absolute top-2 left-2 font-mono bg-[#DB4444] text-white px-3 py-1 text-sm rounded'>
                  -40%
                </p>
                <p className='absolute top-2 right-2 font-mono bg-[#FFFFFF] text-black p-2 text-sm rounded-full'>
                  <GrFavorite />
                </p>
                <p className='absolute top-12 right-2 font-mono bg-[#FFFFFF] text-white p-2 text-sm rounded-full '>
                  <GrView />
                </p>
                {isHovered === index && (
                  <p
                    className='absolute bottom-0 text-center bg-black text-white w-full rounded-b p-1 cursor-pointer text-sm'
                    onClick={() => alert(index)}
                  >
                    Add To Cart
                  </p>
                )}
              </div>
              <div className='w-full h-full mt-2'>
                <div className='flex flex-col items-start gap-2'>
                  <p className='font-bold font-mono'>{item.title}</p>
                  <p className='text-[#DB4444] text-sm'>$120.00</p>
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
      </div>
      <div className='w-[80%] mt-60'>
        <img src={Cover} alt='' className='w-full min-h-full' />
      </div>
    </div>
  )
}

export default ProductThisMonth
