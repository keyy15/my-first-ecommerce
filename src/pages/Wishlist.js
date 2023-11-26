import React from 'react'
import WishistProduct from '../components/WishistProduct'
import JustForYou from '../components/JustForYou'

const Wishlist = ({
  wishListItems,
  handleViewMoreProducts,
  handleDeleteFromWishlist,
  productsAPIs,
  visibleItemCount
}) => {
  return (
    <div>
      <WishistProduct
        wishListItems={wishListItems}
        handleDeleteFromWishlist={handleDeleteFromWishlist}
        handleViewMoreProducts={handleViewMoreProducts}
        productsAPIs={productsAPIs}
        visibleItemCount={visibleItemCount}
      />
      <JustForYou />
    </div>
  )
}

export default Wishlist
