// src/redux/shopThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/api';

export const fetchShopDetails = createAsyncThunk(
  'shopDetails/fetchShopDetails',
  async (id) => {
    const response = await api.get(`shop/${id}`); // Replace with your actual API endpoint
    return response;
  }
);
