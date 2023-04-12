import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axios from 'axios';
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await axios.get('http://6622-106-51-70-135.ngrok.io/category/list',{});
  return res.data;
});
const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
  reducers: undefined,
});
export default ProductSlice.reducer;
