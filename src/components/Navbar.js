import React, { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsHeart, BsCart  } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { FaRegUser, FaRegStar } from 'react-icons/fa6'
import { IoBag } from 'react-icons/io5'
import { MdOutlineCancel, MdLogout } from 'react-icons/md'

const Navbar = ({ wishListItems, cartItems, products }) => {
  const navbarMenu = [
    { title: 'Home', link: 'home' },
    { title: 'Contact', link: 'contact' },
    { title: 'About', link: 'about' },
    { title: 'Sing Up', link: 'signup' }
  ]

  const subOnUser = [
    { title: 'Manage my account', icons: <FaRegUser /> },
    { title: 'My Order', icons: <IoBag /> },
    { title: 'My Cancellations', icons: <MdOutlineCancel /> },
    { title: 'My Reviews', icons: <FaRegStar /> },
    { title: 'Logout', icons: <MdLogout /> }
  ]

  const [activeLink, setActiveLink] = useState('')

  const [subHidden, setSubHide] = useState(false)
  const componentRef = useRef(null)

  const handleSubHidden = () => {
    setSubHide(prvSubHide => !prvSubHide)
  }

  const handleClickOutSide = event => {
    if (!componentRef.current?.contains(event.target)) {
      setSubHide(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  })

  return (
    <div className='w-full h-full flex items-center justify-center py-4 border-b mt-4'>
      <div className='w-[80%] h-full flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <p className='text-xl font-extrabold'>Exclusive</p>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='flex items-center gap-14'>
            {navbarMenu.map((item, index) => (
              <li
                className={`delay-25 duration-25 transform hover:scale-125 transition ease-linear ${
                  activeLink === item.link ? 'scale-125' : ''
                }`}
                key={index}
              >
                <NavLink
                  to={`/${item.link}`}
                  className={`font-normal cursor-pointer text-sm`}
                  onClick={() => setActiveLink(item.link)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex items-center justify-center gap-8 bg-[#F5F5F5] p-2 rounded shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
            <input
              type='text'
              className='focus:outline-none bg-[#F5F5F5] text-[14px] px-4'
              placeholder='What are you looking for?'
            />
            <FiSearch className='cursor-pointer text-xl' />
          </div>
          <div className='flex items-center gap-4 relative' ref={componentRef}>
            <NavLink to={'/wishlist'}>
              <BsHeart
                className={`cursor-pointer text-xl hover:bg-[#DB4444] p-[2px] rounded hover:text-white relative ${
                  activeLink === 'wishlist' ? 'text-white' : ''
                }`}
              />
              {wishListItems.length > 0 && (
                <p className='text-white bg-[#DB4444] absolute left-3 -top-1 text-[9px] px-1 rounded-3xl'>
                  {wishListItems.length}
                </p>
              )}
            </NavLink>
            <NavLink to={'/addtocart'}>
              <BsCart
                className={`cursor-pointer text-xl hover:bg-[#DB4444] p-[2px] rounded hover:text-white relative ${
                  activeLink === 'addtocart' ? 'text-white' : ''
                }`}
              />
              {cartItems.length > 0 && (
                <p className='text-white bg-[#DB4444] absolute right-8 -top-1 text-[9px] px-1 rounded-3xl'>
                  {cartItems.length}
                </p>
              )}
            </NavLink>
            <FaRegUser
              className='cursor-pointer text-xl hover:bg-[#DB4444] p-[2px] rounded hover:text-white'
              onClick={handleSubHidden}
            />
            <ul
              className={`${
                subHidden ? '' : 'hidden'
              } absolute right-0 top-full w-[280px] py-4 rounded text-md flex flex-col items-start justify-between gap-2 font-mono text-[20px] text-white border bg-black bg-opacity-25 backdrop-blur-md mt-2`}
            >
              {subOnUser.map((item, index) => (
                <li
                  className='hover:text-white cursor-pointer flex items-center justify-start gap-2 w-full h-full delay-25 duration-25 transform hover:scale-125 transition ease-linear ml-10'
                  key={index}
                >
                  {item.icons}
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
