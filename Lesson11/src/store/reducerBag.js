import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchContentBag = createAsyncThunk(
  'content/fetchContentBag',
  async () => {
    const res = await fetch('http://localhost:5000/my-bag');
    const data = await res.json()
    console.log(data);
    return data;
  }
);

const bagSlice = createSlice(
  {
    name: "my_bag",
    initialState: {
      myBagArr: [],
      isLoading: false,
      error: null
    },
    extraReducers: (builder) => {
      builder.addCase(fetchContentBag.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchContentBag.fulfilled, (state, action) => {
        state.myBagArr = action.payload
        state.isLoading = false
      })
      builder.addCase(fetchContentBag.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
      })
    },
  }
)

export default bagSlice.reducer;