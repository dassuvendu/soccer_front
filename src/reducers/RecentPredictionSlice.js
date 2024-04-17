import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import errorHandler from "../store/errorHandler";
import api from "../store/api";

export const recentPredictions = createAsyncThunk(
    'recentPredict',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/my_predictions', userInput);
            if (response.status === 200) {
                console.log("Recent data:", response?.status);
                return response?.data;
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
    isLoading: false,
    error: false,
    recent: []
}
const RecentPredictionSlice = createSlice(
    {
        name: 'recentPredict',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(recentPredictions.pending, (state) => {
                state.isLoading = true
            }).addCase(recentPredictions.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.recent = payload
                state.error = false
            }).addCase(recentPredictions.rejected, (state, { payload }) => {
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
export default RecentPredictionSlice.reducer