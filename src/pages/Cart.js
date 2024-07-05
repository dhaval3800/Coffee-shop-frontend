// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Button } from 'antd';
import { addQuantity, reduceQuantity, removeFromCart, selectCartItems, selectCartTotal } from '../redux/features/cart/cartSlice';
import PaymentForm from './PaymentForm';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={item => (
          <List.Item
            actions={[
              <Button onClick={() => dispatch(addQuantity(item))}>+</Button>,
              <Button onClick={() => dispatch(reduceQuantity(item))}>-</Button>,
              <Button onClick={() => dispatch(removeFromCart(item))}>Remove</Button>,
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={`$${item.price} x ${item.quantity}`}
            />
            <div>${item.price * item.quantity}</div>
          </List.Item>
        )}
      />
      <div>Total: ${total}</div>

      <PaymentForm />

    </div>
  );
};

export default Cart;
