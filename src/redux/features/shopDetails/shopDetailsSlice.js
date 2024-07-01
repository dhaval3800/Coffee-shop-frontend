// src/redux/shopDetailsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchShopDetails } from './shopDetailsThunks';

const initialState = {
  shopDetails: null,
  fetching: true,
  error: {
    status: false,
    message: "",
  },
};

const shopDetailsSlice = createSlice({
  name: 'shopDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopDetails.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchShopDetails.fulfilled, (state, action) => {
        state.fetching = false;
        state.shopDetails = action.payload;
      })
      .addCase(fetchShopDetails.rejected, (state, action) => {
        state.fetching = false;
        state.error.status = true;
        state.error.message = action.error.message;
      });
  },
});

export const selectShopDetails = (state) => state.shopDetails.shopDetails;
export const selectFetching = (state) => state.shopDetails.fetching;
export const selectError = (state) => state.shopDetails.error;
export const shopDetailsReducer = shopDetailsSlice.reducer
