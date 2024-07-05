// src/redux/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart(state) {
      state.totalPrice = 0;
      state.cartItems = [];
    },
    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload.product._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload.product, quantity: 1 });
      }
      state.totalPrice += action.payload.product.price;
    },
    removeFromCart(state, action) {
      const itemToRemove = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      }
    },
    addQuantity(state, action) {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
    },
    reduceQuantity(state, action) {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.totalPrice;

export const {
  resetCart,
  addToCart,
  removeFromCart,
  addQuantity,
  reduceQuantity,
} = cartSlice.actions;

export const cartReducer =  cartSlice.reducer;
