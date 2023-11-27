import React from 'react'
import Test from '../assets/amazone.webp'

const CartProducts = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
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
          <div className='w-full h-full flex items-center justify-center bg-white rounded-sm py-4 shadow mt-10'>
            <div className='w-full h-full flex items-center justify-around'>
              <div className='w-[25%] text-center flex items-center justify-center gap-2'>
                <img src={Test} alt='' className='w-16 h-14 rounded' />
                <p>LCD Monitor</p>
              </div>
              <div className='w-[25%] text-center'>$650.00</div>
              <div className='w-[25%] text-center'>
                <input
                  type='number'
                  className='w-20 h-10 focus:outline-none border-2 rounded-md text-center'
                />
              </div>
              <div className='w-[25%] text-center'>$650.00</div>
            </div>
          </div>
          <div className='w-full h-full flex items-center justify-center bg-white rounded-sm py-4 shadow mt-10'>
            <div className='w-full h-full flex items-center justify-around'>
              <div className='w-[25%] text-center flex items-center justify-center gap-2'>
                <img src={Test} alt='' className='w-16 h-14 rounded' />
                <p>LCD Monitor</p>
              </div>
              <div className='w-[25%] text-center'>$650.00</div>
              <div className='w-[25%] text-center'>
                <input
                  type='number'
                  className='w-20 h-10 focus:outline-none border-2 rounded-md text-center'
                />
              </div>
              <div className='w-[25%] text-center'>$650.00</div>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex items-center justify-between mt-6'>
          <button
            className='px-10 py-4 border rounded-lg border-[#808080] font-semibold'
            onClick={() => alert(123)}
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
          <div>1</div>
          <div className='w-[40%] h-full flex flex-col items-center justify-center rounded-md border-2 p-8 gap-6 border-black'>
            <h2 className='text-2xl font-bold flex w-full'>Cart total</h2>
            <div className='w-full flex items-center justify-between border-b-2'>
              <p>Subtotal: </p>
              <p>$1,420.00</p>
            </div>
            <div className='w-full flex items-center justify-between border-b-2'>
              <p>Shipping: </p>
              <p>Free</p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p>Total: </p>
              <p>$1,420.00</p>
            </div>
            <button className='text-white bg-[#DB4444] py-2 px-10 rounded' onClick={() => alert('process to checkout')}>Process to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProducts
