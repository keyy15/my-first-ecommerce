import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

function SidebarContent () {
  const contentNavbar = [
    { title: 'Woman`s fashion', link: 'womans-fashion' },
    { title: 'Man`s fashion', link: 'mans-fashion' },
    { title: 'Electronics', link: 'electronics' },
    { title: 'Medicine', link: 'medicine' },
    { title: 'Sports & Outdoor', link: 'mans-fashion' },
    { title: 'Baby`s & Toys', link: 'mans-fashion' },
    { title: 'Groceries & Pets', link: 'mans-fashion' },
    { title: 'Health & Beauty', link: 'mans-fashion' }
  ]
  return (
    <div className='w-[20%] h-full border-r'>
      <div className='w-full h-full mt-10'>
        <ul className='flex flex-col gap-4'>
          {contentNavbar.map((item, index) => (
            <li className='text-sm font-normal' key={index}>
              <NavLink
                to={'/link'}
                className={`flex items-center justify-between`}
              >
                {' '}
                {item.title}{' '}
                <IoIosArrowForward className='font-semibold text-base mr-4' />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SidebarContent
