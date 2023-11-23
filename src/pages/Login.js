import React from 'react'
import SingupWithGoogle from '../assets/SingupWithGoogle.png'

const Singup = () => {
  return (
    <div>
      <div className='w-full h-[720px] flex item-center justify-center'>
        <div className='w-[80%] flex items-center justify-center'>
          <div className='flex flex-col items-start justify-center'>
            <h4 className='text-3xl'>Log in to Exclusive</h4>
            <p className='text-sm py-6'>Enter your details below</p>

            <form
              method='POST'
              className='flex flex-col items-center justify-between gap-12'
            >
              <input
                type='text'
                placeholder='Name'
                className='w-full h-full border-b-2 py-2 focus:outline-none text-[12px]'
              />
              <input
                type='text'
                placeholder='Email or phone number'
                className='w-full h-full border-b-2 py-2 focus:outline-none text-[12px]'
              />
              <input
                type='text'
                placeholder='Password'
                className='w-full h-full border-b-2 py-2 focus:outline-none text-[12px]'
              />
              <div className='flex items-center justify-between w-[520px] '>
                <button className='w-full h-full bg-[#DB4444] text-sm text-white py-4 rounded'>
                  Login
                </button>
                <button className='w-full h-full text-[#DB4444]'>
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singup
