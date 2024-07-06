import { createSlice } from '@reduxjs/toolkit';

import { loginUser } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    updateUser: (state,action) => {
      state.user.name = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const selectAuth = (state) => state.auth;
export const { logout, updateUser } = authSlice.actions;
export const authReducer = authSlice.reducer;