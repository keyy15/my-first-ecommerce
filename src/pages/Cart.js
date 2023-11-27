import React from 'react'
import CartProducts from '../components/CartProducts'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <CartProducts cartItems={cartItems} />
    </div>
  )
}

export default Cart
