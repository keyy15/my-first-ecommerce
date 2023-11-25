import React from 'react'
import WishistProduct from '../components/WishistProduct'
import JustForYou from '../components/JustForYou'

const Wishlist = ({
  wishListItems,
  handleViewMoreProducts,
  handleDeleteFromWishlist
}) => {
  return (
    <div>
      <WishistProduct
        wishListItems={wishListItems}
        handleDeleteFromWishlist={handleDeleteFromWishlist}
        handleViewMoreProducts={handleViewMoreProducts}
      />
      <JustForYou />
    </div>
  )
}

export default Wishlist
