import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactUs = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[80%]'>
        <div className='w-full h-[140px] flex items-center text-sm'>
          <p className='text-[#808080]'>
            Home / <span className='text-black'>Contact</span>
          </p>
        </div>
        <div className='w-full h-[320px] flex items-center gap-6'>
          <div className='w-[30%] h-full flex flex-col items-center justify-between gap-4 shadow-lg border p-4 py-8'>
            <div className='h-full flex items-center gap-2'>
              <FaPhoneSquareAlt className='p-2 text-4xl bg-[#DB4444] text-white rounded-full' />
              <p>Call to us</p>
            </div>
            <div className='flex flex-col items-start justify-between gap-4'>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone +855 61 87 50 89</p>
              <p className='w-full border'></p>
            </div>
            <div className='flex items-center gap-2'>
              <MdEmail className='p-2 text-4xl bg-[#DB4444] text-white rounded-full' />
              <p>Write to us</p>
            </div>
            <div className='flex flex-col items-start justify-between gap-4'>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Emails: smeyhem01@gmail.com</p>
            </div>
          </div>
          <div className='w-[70%] h-full flex items-center flex-col gap-4 justify-center shadow-lg border p-4 py-8'>
            <div className='w-full h-full flex items-center justify-between gap-4'>
              <div className='flex items-center justify-center gap-8 bg-[#F5F5F5] p-2 rounded border'>
                <input
                  type='text'
                  className='focus:outline-none bg-[#F5F5F5] text-[14px] px-4'
                  placeholder='Your name *'
                />
              </div>
              <div className='flex items-center justify-center gap-8 bg-[#F5F5F5] p-2 rounded border'>
                <input
                  type='text'
                  className='focus:outline-none bg-[#F5F5F5] text-[14px] px-4'
                  placeholder='Your email *'
                />
              </div>
              <div className='flex items-center justify-center gap-8 bg-[#F5F5F5] p-2 rounded border'>
                <input
                  type='text'
                  className='focus:outline-none bg-[#F5F5F5] text-[14px] px-4'
                  placeholder='Your phone *'
                />
              </div>
            </div>
            <div className='w-full h-full flex items-center justify-between gap-4'>
              <div className='w-full h-full flex items-center justify-center gap-8 bg-[#F5F5F5] p-2 rounded border'>
                <input
                  type='text'
                  className='h-full w-full flex items-center focus:outline-none bg-[#F5F5F5] text-[14px] px-4'
                  placeholder='Your message *'
                />
              </div>
            </div>
            <div className='flex items-end justify-end w-full'>
              <button className='bg-[#DB4444] text-white py-3 px-12 rounded text-sm text-right'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
