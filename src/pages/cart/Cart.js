// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Button } from 'antd';
import { addQuantity, reduceQuantity, removeFromCart, selectCartItems, selectCartTotal } from '../../redux/features/cart/cartSlice';
import PaymentForm from '../../components/paymentForm/PaymentForm';
import './cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  console.log("🚀 ~ file: Cart.js:11 ~ Cart ~ items:", items)

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div className='cart-list'>
          <div className='cart-image-wrap'>
            <img src={item.image} />
          </div>
          <div>
            <div className='cart-item-desc'>
              <div>{item.name}</div>
              <p>{`$${item.price} x ${item.quantity}`}</p>
            </div>
            <div className='cart-button-wrap'>
              <Button onClick={() => dispatch(addQuantity(item))}>+</Button>
              <Button onClick={() => dispatch(reduceQuantity(item))}>-</Button>
              <Button onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
            </div>
          </div>

        </div>
      ))
    }
      <PaymentForm />

    </div>
  );
};

export default Cart;
