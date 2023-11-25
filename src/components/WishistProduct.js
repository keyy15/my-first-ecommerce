import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import { BsFillCartXFill } from 'react-icons/bs'

const WishlistProduct = ({
  wishListItems,
  handleViewMoreProducts,
  handleDeleteFromWishlist
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [visibleItemCount, setVisibleItemCount] = useState(4)

  const getVisibleItems = () => {
    if (showAll) {
      return wishListItems
    } else {
      return wishListItems.slice(0, visibleItemCount)
    }
  }

  return (
    <div className='w-full h-full flex items-center justify-center mt-10'>
      {wishListItems.length === 0 ? (
        <div className='w-[80%] h-[340px] flex items-center justify-center gap-8 text-2xl'>
          <BsFillCartXFill className='text-7xl bg-[#DB4444] text-white rounded-xl p-2' />
          <p className='p-2 rounded-xl border px-8'>No Favorite Item</p>
        </div>
      ) : (
        <div className='w-[80%] h-full flex flex-col gap-4'>
          <div className='flex gap-4 h-[40px]'></div>
          <div className='flex items-center justify-between py-2'>
            <h4 className='text-xl font-semibold'>
              Wishlist (
              {wishListItems.length > 0 && (
                <span className=''>{wishListItems.length}</span>
              )}
              )
            </h4>
            <h4 className='text-sm border border-[#808080] px-12 py-4 rounded-md text-black cursor-pointer'>
              Move all to bag
            </h4>
          </div>
          <div className='w-full h-full grid grid-cols-4 gap-8 mt-10'>
            {getVisibleItems().map((item, index) => (
              <div
                className={`flex flex-col items-center w-full  ${
                  index === currentIndex ? '' : ''
                }`}
                key={index}
              >
                <div
                  className='w-full h-full bg-[#F5F5F5] relative'
                  key={item.id}
                >
                  <img
                    src={`http://localhost:90/php-backend/uploaded/${item.pro_img}`}
                    alt={item.pro_name}
                    className='w-full h-[240px] p-12'
                  />
                  <p className='absolute top-2 left-2 font-mono bg-[#DB4444] text-white px-3 py-1 text-sm rounded'>
                    -{item.pro_dis}%
                  </p>
                  <p
                    onClick={() => handleDeleteFromWishlist(index)}
                    className='absolute top-2 right-2 font-mono bg-[#FFFFFF] text-black p-2 cursor-pointer text-sm rounded-full hover:text-[#DB4444]'
                  >
                    <MdDelete />
                  </p>
                  <p
                    className='absolute bottom-0 text-center bg-black text-white w-full rounded-b p-1 cursor-pointer text-sm'
                    onClick={() => alert(index)}
                  >
                    Add To Cart
                  </p>
                </div>
                <div className='w-full h-full mt-2'>
                  <div className='flex flex-col items-start gap-2'>
                    <p className='font-bold font-mono'>{item.pro_name}</p>
                    <p className='text-sm text-[#DB4444]'>
                      ${item.pro_price}.00
                    </p>
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
              {visibleItemCount === wishListItems.length
                ? 'View More Products'
                : 'Hide'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WishlistProduct
