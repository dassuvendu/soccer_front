import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';

export const getUid = createAsyncThunk(
    'user/getUid',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.post('user/get-uuid');
        if (response.status === 200) {
          return response.data;
          
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
    loading: false,
    valid:[]
};

const UuidSlice = createSlice({
    name: 'uuid',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getUid.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.message = null;
        })
        .addCase(getUid.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.error = null;
          state.valid = payload; 
        })
        .addCase(getUid.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = true;
          state.message = payload?.message || 'Something went wrong. Try again later.';
        })
    }
})

export default UuidSlice.reducer;