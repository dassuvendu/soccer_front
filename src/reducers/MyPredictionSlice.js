import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/api";
import errorHandler from "../store/errorHandler";


export const getPredictions = createAsyncThunk(
    'myPredict',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/my_predictions', userInput);
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

export const recentPredictions = createAsyncThunk(
    'recentPredict',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/my_predictions', userInput);
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
    isLoading: false,
    error: false,
    fetchedPredictions: [],
    recent: []
}
const MyPredictionsSlice = createSlice(
    {
        name: 'fetchPredic',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getPredictions.pending, (state) => {
                state.isLoading = true
            }).addCase(getPredictions.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.fetchedPredictions = payload
                state.error = false
            }).addCase(getPredictions.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            }).addCase(recentPredictions.pending, (state) => {
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
export default MyPredictionsSlice.reducer