import { createSlice } from '@reduxjs/toolkit';
import { fetchShops, toggleShopLike } from './shopThunks'; // Import the thunk

const initialState = {
  shopList: [],
  fetching: true, // Initial fetching state
  error: {
    status: false,
    message: "",
  },
};

const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.fetching = false;
        state.shopList = action.payload;
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.fetching = false;
        state.error.status = true;
        state.error.message = action.error.message;
      })
      .addCase(toggleShopLike.fulfilled, (state, action) => {
        const { shopId } = action.payload;
        const updatedShopList = state.shopList.map(shop => {
          if (shop._id === shopId) {
            return {
              ...shop,
              isLiked: !shop.isLiked 
            };
          }
          return shop;
        });
        state.shopList = updatedShopList;
      });
  },
});

export const selectShopList = (state) => state.shops.shopList;
export const selectFetching = (state) => state.shops.fetching;
export const selectError = (state) => state.shops.error;
export const shopReducer =  shopSlice.reducer;
