import React from 'react'
import SidebarContent from '../components/SidebarContent'
import Content from '../components/Content'
import ProductToday from '../components/ProductToday'
import Category from '../components/Category'
import ProductThisMonth from '../components/ProductThisMonth'
import OurProducts from '../components/OurProducts'
import Featured from '../components/Featured'
import TrustCompany from '../components/TrustCompany'

const Home = ({ addToWishlist, addToCartItems }) => {
  return (
    <div>
      <div className='w-full h-full flex item-center justify-center '>
        <div className='w-[80%] h-full flex items-around'>
          <SidebarContent />
          <Content />
        </div>
      </div>
      <ProductToday
        addToWishlist={addToWishlist}
        addToCartItems={addToCartItems}
      />
      <Category />
      <ProductThisMonth />
      <OurProducts />
      <Featured />
      <TrustCompany />
    </div>
  )
}

export default Home
