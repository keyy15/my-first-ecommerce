import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { FiSmartphone } from 'react-icons/fi'
import { MdOutlineComputer } from 'react-icons/md'
import { BsSmartwatch, BsCamera } from 'react-icons/bs'
import { FaHeadphones } from 'react-icons/fa'
import { LuGamepad2 } from 'react-icons/lu'

const Category = () => {
  const itemList = [
    { title: 'Phone', icon: <FiSmartphone /> },
    { title: 'Computers', icon: <MdOutlineComputer /> },
    { title: 'SmartWatch', icon: <BsSmartwatch /> },
    { title: 'Camera', icon: <BsCamera /> },
    { title: 'HeadPhone', icon: <FaHeadphones /> },
    { title: 'Gaming', icon: <LuGamepad2 /> }
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
      itemList[(currentIndex + 3) % itemList.length],
      itemList[(currentIndex + 4) % itemList.length],
      itemList[(currentIndex + 5) % itemList.length]
    ]
  }

  const visibleItems = getVisibleItems()

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[80%] h-full flex flex-col gap-4 mt-20'>
        <div className='flex gap-4 h-[40px]'>
          <p className='text-[#DB4444] border-r-[18px] border-[#DB4444] rounded'></p>
          <p className='text-[#DB4444] text-sm font-semibold font-mono flex items-center'>
            Categories
          </p>
        </div>
        <div className='flex items-center justify-between py-2'>
          <h4 className='text-3xl font-semibold'>Brown By Category</h4>
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
        <div className='w-full h-full flex items-center justify-between gap-8 cursor-pointer'>
          {visibleItems.map((item, index) => (
            <div
              className={`flex flex-col items-center justify-center w-1/4 h-[160px] hover:scale-90 hover:transition-all hover:duration-[250ms]  border-2 gap-4 hover:bg-[#DB4444] hover:text-white ${
                index === currentIndex ? '' : ''
              }
              `}
            >
              <p className='text-4xl'>{item.icon}</p>
              <p className='font-mono'>{item.title}</p>
            </div>
          ))}
        </div>
        <div className='border-b-[2px] mt-16'></div>
      </div>
    </div>
  )
}

export default Category
