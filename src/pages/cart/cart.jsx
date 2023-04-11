import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../contex/shop-context'
import { CartItem } from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
  const navigate = useNavigate()
  const {cartItems,getTotolCartAmount} = useContext(ShopContext);
  const totalAmount = getTotolCartAmount();
  return (
    <div className='cart'>
        <div>
            <h1>Your cart items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product => {
                if (cartItems[product.id] !== 0){
                    return (
                        <CartItem data={product} key={product.id}/>
                    )
                }
            }))}
        </div>
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue shopping</button>
            <button>Checkout</button>
        </div>
    </div>
  )
}
