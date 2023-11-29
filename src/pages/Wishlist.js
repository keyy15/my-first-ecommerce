import React from 'react'
import WishistProduct from '../components/WishistProduct'
import JustForYou from '../components/JustForYou'

const Wishlist = ({
  wishListItems,
  handleViewMoreProducts,
  handleDeleteFromWishlist,
  productsAPIs,
  visibleItemCount,
  getVisibleItems,
}) => {
  return (
    <div>
      <WishistProduct
        wishListItems={wishListItems}
        handleDeleteFromWishlist={handleDeleteFromWishlist}
        handleViewMoreProducts={handleViewMoreProducts}
        productsAPIs={productsAPIs}
        visibleItemCount={visibleItemCount}
        getVisibleItems={getVisibleItems}
      />
      <JustForYou />
    </div>
  )
}

export default Wishlist
