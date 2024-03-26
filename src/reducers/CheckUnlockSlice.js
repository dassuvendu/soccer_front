import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";
import errorHandler from "../store/ErrorHandler";

export const getCheck = createAsyncThunk(
    'Check',
    async (user, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/is_prediction_unlocked',user);
            if (response.status) {

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
)
export const getUnlockCheck = createAsyncThunk(
    'UnlockCheck',
    async (user, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/unlock_prediction',user);
            if (response.status) {

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
)
const initialState = {
    isLoading:false,
    error: false,
}
const CheckUnlockSlice = createSlice(
    {
        name: 'check',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(getCheck.pending, (state, { payload }) => {
                state.isLoading = true
            }).addCase(getCheck.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
            }).addCase(getCheck.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            }).addCase(getUnlockCheck.pending, (state) => {
                state.isLoading = true
            }).addCase(getUnlockCheck.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
            }).addCase(getUnlockCheck.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
        }
    }
)
export default CheckUnlockSlice.reducer