import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../store/api';

export const subscriptionPlans = createAsyncThunk(
    'user/all-plans',
    async (thunkAPI) => {
        try {
            const response = await api.get('user/all-plans');
            if (response?.status === 200 && response?.data?.data.length) {
                return response.data.data;
            } else {
                throw Error('Failed to load Plan');
            }
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const initialState = {
    message: null,
    error: null,
    loading: false,
    plans: [],
    dashboard: [],
};

const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(subscriptionPlans.pending, (state) => {
                state.loading = true;
            })
            .addCase(subscriptionPlans.fulfilled, (state, response) => {
                state.loading = false;
                state.plans = response.payload;
            })
            .addCase(subscriptionPlans.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

    },

});

export default plansSlice.reducer;