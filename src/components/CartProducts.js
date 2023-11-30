import React, { useEffect, useState } from 'react'
import { BsFillCartXFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { IoCloseCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import '../styles/global.css'

const CartProducts = ({
  cartItems,
  handleRemoveFromAddToCart,
  generateRandomCoupon
}) => {
  const [quantity, setQuantity] = useState({})

  const navigate = useNavigate()

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [itemId]: newQuantity
    }))
  }

  const calculateSubtotal = item => {
    const itemQuantity = quantity[item.id] || 1
    return itemQuantity * item.pro_price
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0)
  }

  const handleApplyCouponCode = () => {
    const couponCode = generateRandomCoupon()
    console.log('Generate Coupon Code', couponCode)
  }

  return (
    <div className='w-full h-full flex items-center justify-center'>
      {cartItems.length === 0 ? (
        <div className='w-[80%] h-[340px] flex items-center justify-center gap-8 text-2xl border rounded-xl mt-10'>
          <BsFillCartXFill className='text-7xl bg-[#DB4444] text-white rounded-xl p-2' />
          <p className='p-2 rounded-xl border px-8'>No Cart Item Added</p>
        </div>
      ) : (
        <div className='w-[80%] flex flex-col items-center font-medium'>
          <div className='w-full h-[140px] flex items-center'>
            <p className='text-[#808080]'>
              Home / <span className='text-black'>Cart</span>
            </p>
          </div>
          <div className='w-full h-full'>
            <div className='w-full h-full flex items-center justify-center bg-white rounded-sm py-4 shadow'>
              <ul className='w-full h-full flex items-center justify-center'>
                <li className='w-[25%] text-center'>Product</li>
                <li className='w-[25%] text-center'>Price</li>
                <li className='w-[25%] text-center'>Quantity</li>
                <li className='w-[25%] text-center'>Subtotal</li>
              </ul>
            </div>
            {cartItems.map((item, index) => (
              <div
                className={`w-full h-full flex items-center justify-center bg-white rounded-sm py-4 shadow mt-10 relative`}
                key={index}
              >
                <div className='w-full h-full flex items-center justify-around'>
                  <div className='w-[25%] text-center flex items-center justify-center gap-2'>
                    <img
                      src={`http://localhost:90/php-backend/uploaded/${item.pro_img}`}
                      alt=''
                      className='w-1/3 h-14 rounded'
                    />
                    <p className='w-1/2'>{item.pro_name}</p>
                  </div>
                  <div className='w-[25%] text-center'>
                    ${item.pro_price}.00
                  </div>
                  <div className='w-[25%] text-center'>
                    <input
                      type='number'
                      value={quantity[item.id] || 1}
                      onChange={e =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      className='w-20 h-10 focus:outline-none border-2 rounded-md text-center'
                    />
                  </div>
                  <div className='w-[25%] text-center'>
                    ${calculateSubtotal(item)}
                  </div>
                </div>
                <IoCloseCircle
                  className='absolute -top-2.5 -right-2.5 text-xl text-[#DB4444] hover:text-black'
                  onClick={() => handleRemoveFromAddToCart(index)}
                />
              </div>
            ))}
          </div>
          <div className='w-full h-full flex items-center justify-between mt-6'>
            <button
              className='px-10 py-4 border rounded-lg border-[#808080] font-semibold'
              onClick={() => navigate('/home')}
            >
              Return to shop
            </button>
            <button
              className='px-10 py-4 border rounded-lg border-[#808080] font-semibold'
              onClick={() => alert(123)}
            >
              Update Cart
            </button>
          </div>
          <div className='w-full h-full flex items-center justify-between mt-10'>
            <div className='w-full h-full flex items-center gap-8'>
              <div className='flex items-center justify-center gap-8 bg-[#F5F5F5] p-2 rounded border'>
                <input
                  type='text'
                  className='focus:outline-none bg-[#F5F5F5] text-[14px] px-4'
                  placeholder='Coupon Code'
                />
              </div>
              <button
                className='bg-[#DB4444] text-white p-2 rounded px-8 text-sm'
                onClick={handleApplyCouponCode}
              >
                Apply Coupon
              </button>
            </div>
            <div className='w-[40%] h-full flex flex-col items-center justify-center rounded-md border-2 p-8 gap-6 border-black'>
              <h2 className='text-2xl font-bold flex w-full'>Cart total</h2>
              <div className='w-full flex items-center justify-between border-b-2'>
                <p>Subtotal: </p>
                <p>${calculateTotal()}</p>
              </div>
              <div className='w-full flex items-center justify-between border-b-2'>
                <p>Shipping: </p>
                <p>Free</p>
              </div>
              <div className='w-full flex items-center justify-between border-b-2'>
                <p>Tax: </p>
                <p>10%</p>
              </div>
              <div className='w-full flex items-center justify-between border-b-2'>
                <p>Discount: </p>
                <p>50%</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p>Total: </p>
                <p>${calculateTotal()}</p>
              </div>
              <button
                className='text-white bg-[#DB4444] py-2 px-10 rounded'
                onClick={() => alert(123)}
              >
                Process to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartProducts
