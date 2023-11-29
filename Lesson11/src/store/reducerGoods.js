import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchContentGoods = createAsyncThunk(
  'content/fetchContentGoods',
  async () => {
    const res = await fetch('http://localhost:5000/goods');
    const data = await res.json()
    console.log(data);
    return data;
  }
);

const goodsSlice = createSlice(
  {
    name: "goods",
    initialState: {
      goodsArr: [],
      isLoading: false,
      error: null
    },
    extraReducers: (builder) => {
      builder.addCase(fetchContentGoods.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchContentGoods.fulfilled, (state, action) => {
        state.goodsArr = action.payload
        state.isLoading = false
      })
      builder.addCase(fetchContentGoods.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
      })
    },
  }
)

export default goodsSlice.reducer;