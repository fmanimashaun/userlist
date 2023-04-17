import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=5';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get(URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchUsers.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        users: action.payload,
      }))
      .addCase(fetchUsers.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

export default usersSlice.reducer;
