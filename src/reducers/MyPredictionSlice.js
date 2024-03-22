import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";
import errorHandler from "../store/ErrorHandler";

export const getPredictions = createAsyncThunk(
    'myPredict',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/my_predictions');
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
    fetchedPredictions: []
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
            })
        }
    }
)
export default MyPredictionsSlice.reducer