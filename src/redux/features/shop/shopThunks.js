import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { calculateDistance, getUserLocation } from '../../../utils/helper';

export const fetchShops = createAsyncThunk('shops/fetchShops', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get('shop/all');
    const shopList = response;
    return shopList;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const toggleShopLike = createAsyncThunk('shops/toggleShopLike', async ({shopId, actionType}) => {
  const response = await api.post(`toggleStatus`, { shopId, actionType });
  return { shopId, message: response.message }; ;
});
