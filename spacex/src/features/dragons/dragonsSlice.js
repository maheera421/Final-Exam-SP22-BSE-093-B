import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/dragons');
    return response.data;
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.data = action.payload; // Store selected data
        state.loading = false;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const {handleDragons} = dragonsSlice.actions; 

export default dragonsSlice.reducer;
