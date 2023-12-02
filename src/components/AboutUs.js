import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[80%]'>
        <div className='w-full h-[140px] flex items-center text-sm'>
          <p className='text-[#808080]'>
            Home / <span className='text-black'>About</span>
          </p>
        </div>
        <div className='w-full h-[460px] flex items-center justify-around rounded'>
            <div className='w-full h-full flex flex-col items-center justify-between'>
                <h2 className='text-2xl flex items-center'>Our Story</h2>
            </div>
            <div className='w-full h-full flex flex-col items-center justify-between bg-red-800'>2</div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
