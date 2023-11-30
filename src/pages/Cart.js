import React from 'react'
import CartProducts from '../components/CartProducts'

const Cart = ({ cartItems, handleRemoveFromAddToCart, generateRandomCoupon }) => {
  return (
    <div>
      <CartProducts
        cartItems={cartItems}
        handleRemoveFromAddToCart={handleRemoveFromAddToCart}
        generateRandomCoupon={generateRandomCoupon}
      />
    </div>
  )
}

export default Cart
