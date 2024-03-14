import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import errorHandler from '../store/ErrorHandler';
import api from '../store/Api';

export const getLeagues = createAsyncThunk(
  'user/getLeagues',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/leagues',userInput);
      if (response.status === 200) {
        console.log("dres",response.data.data);
        return response.data.data;
      } else {
        let errors = errorHandler(response);
        return rejectWithValue(errors);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);

const initialState = {
  message: null,
  error: null,
  isLoading: false,
  league: [],
};

const LeaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeagues.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getLeagues.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.league = payload; 
      })
      .addCase(getLeagues.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      });
  },
});

export default LeaguesSlice.reducer;
