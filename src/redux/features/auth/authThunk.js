import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api";

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post('login', credentials);
      localStorage.setItem('token', response.token)
      return response.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

