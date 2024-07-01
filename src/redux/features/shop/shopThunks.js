import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/api';

export const fetchShops = createAsyncThunk(
  'shops/fetchShops',
  async () => {
    const response = await api.get('shop/all'); // Replace with your endpoint
    return response;
  }
);

export const toggleShopLike = createAsyncThunk('shops/toggleShopLike', async ({shopId, actionType}) => {
  console.log("🚀 ~ file: shopThunks.js:13 ~ toggleShopLike ~ actionType:", actionType)
  const response = await api.post(`toggleStatus`, { shopId, actionType });
  return { shopId, message: response.message }; ;
});
