import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { BiSupport } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";

const TrustCompany = () => {
  return (
    <div className='w-full h-full flex items-center justify-center mt-40'>
      <div className='w-[80%] h-full flex items-center justify-evenly gap-4'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <FaShippingFast className='bg-[#c1c0c1] text-7xl rounded-full p-4 ' />
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140.00</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <BiSupport className='bg-[#c1c0c1] text-7xl rounded-full p-4 ' />
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <FaCircleCheck className='bg-[#c1c0c1] text-7xl rounded-full p-4 ' />
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  )
}

export default TrustCompany
