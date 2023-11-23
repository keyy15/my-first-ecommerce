import React from 'react'

const TopNavbar = () => {
  return (
    <div className='w-full h-full flex items-center justify-center bg-[#000000]'>
      <div className='w-[80%] h-full flex items-center justify-evenly'>
        <div></div>
        <div className='text-white p-3'>
          <p className='text-[12px] text-[#FFFFFF] font-sans'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className='underline-offset-2 font-bold cursor-pointer'>
              {' '}
              Shop Now
            </span>
          </p>
        </div>
        <div className='outline-none bg-stone-400'>
          <select className='bg-black text-white text-sm outline-none px-8 py-2'>
            <option>English</option>
            <option>Khmer</option>
            <option>Thailand</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
