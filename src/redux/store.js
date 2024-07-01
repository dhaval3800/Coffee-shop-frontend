import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from './features/auth/authSlice';
import { shopReducer } from './features/shop/shopSlice';
import { shopDetailsReducer } from './features/shopDetails/shopDetailsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    shops: shopReducer,
    shopDetails: shopDetailsReducer
  },
});

export default store;
