import React from 'react'
import WishistProduct from '../components/WishistProduct'
import JustForYou from '../components/JustForYou'

const Wishlist = ({wishListItems, handleDeleteFromWishlist}) => {
  return (
    <div>
      <WishistProduct wishListItems={wishListItems} handleDeleteFromWishlist={handleDeleteFromWishlist}/>
      <JustForYou />
    </div>
  )
}

export default Wishlist
