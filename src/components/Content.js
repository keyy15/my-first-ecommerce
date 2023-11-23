import React from 'react'
import ShopNow from '../assets/Frame 560.png'

function Content () {
  return (
    <div className='w-[80%] flex items-center justify-center'>
      <div className='w-full mt-10'>
        <div className='flex items-center justify-center'>
          <img src={ShopNow} alt="" className='w-full h-[274px] ml-16 object-fill items-center'/>
        </div>
      </div>
    </div>
  )
}

export default Content
