import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
































// // src/redux/features/auth/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const authenticateThunkAsync = createAsyncThunk(
//   'auth/authenticate',
//   async (_, { dispatch }) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Perform authentication
//       // Assume API call or other authentication logic here
//       return { isAuthenticated: true, user: { email: 'user@example.com' } };
//     }
//     return { isAuthenticated: false, user: null };
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     isAuthenticated: false,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       localStorage.setItem('token', action.payload.token);
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       localStorage.removeItem('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(authenticateThunkAsync.fulfilled, (state, action) => {
//       state.isAuthenticated = action.payload.isAuthenticated;
//       state.user = action.payload.user;
//     });
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
