import React from 'react'
import { FiSearch } from 'react-icons/fi'
import QR from '../assets/QR.png'
import Google from '../assets/google.png'
import AppStore from '../assets/Appstore.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-full h-full flex items-center justify-center mt-40 bg-black'>
      <div className='w-[80%] h-full flex items-start justify-between gap-4 text-white my-20'>
        <div className='flex flex-col items-start justify-between gap-4'>
          <p className='text-xl font-extrabold'>Exclusive</p>
          <p className='text-md font-semibold'>Subscribe</p>
          <p className='text-sm'>Get 10% of your First Order</p>
          <div className='flex items-center justify-center gap-8 bg-black p-2 rounded border-2'>
            <input
              type='text'
              className='focus:outline-none bg-black text-[14px] px-4'
              placeholder='Enter your email'
            />
            <FiSearch className='cursor-pointer text-xl' />
          </div>
        </div>
        <div className='flex flex-col items-start justify-between gap-4'>
          <p className='text-xl'>Support</p>
          <p className='text-sm'>Cambodia</p>
          <p className='text-sm'>smeyhem01@gmail.com</p>
          <p className='text-sm'>+855 61 875 089</p>
        </div>
        <div className='flex flex-col items-start justify-between gap-4'>
          <p className='text-xl'>Account</p>
          <p className='text-sm'>My Account</p>
          <p className='text-sm'>Login / Register</p>
          <p className='text-sm'>Cart</p>
          <p className='text-sm'>Wishlist</p>
          <p className='text-sm'>Shop</p>
        </div>
        <div className='flex flex-col items-start justify-between gap-4'>
          <p className='text-xl'>Quick</p>
          <p className='text-sm'>Privacy Policy</p>
          <p className='text-sm'>Term of Use</p>
          <p className='text-sm'>FAQ</p>
          <p className='text-sm'>Contact</p>
        </div>
        <div className='flex flex-col items-start justify-between gap-4'>
          <p className='text-xl'>Download App</p>
          <p className='text-sm'>Save $3 with App New User Only</p>
          <div className='w-full h-[96px] flex items-center justify-center gap-1'>
            <div className='w-[40%] h-full flex items-center justify-center'>
              <img src={QR} alt='' className='w-full h-full rounded' />
            </div>
            <div className='w-[60%] h-full flex flex-col items-center justify-center gap-2'>
              <div className='w-full h-full flex items-center justify-center box-border'>
                <img src={Google} alt='' className='w-[110px] h-full' />
              </div>
              <div className='w-full h-full flex items-center justify-center'>
                <img src={AppStore} alt='' className='w-[110px] h-full' />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-start gap-8 text-xl'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
