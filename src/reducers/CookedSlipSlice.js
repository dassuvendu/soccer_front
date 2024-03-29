import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import errorHandler from "../store/ErrorHandler";
import api from "../store/Api";

export const getOddsSlips = createAsyncThunk(
    'oddSlip',
    async (date, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/odds', date);
            if (response.status === 200) {
                console.log("dres", response.data.data);
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
)
const initialState = {
    oddsData: [],
    isLoading: false,
    error: false
}
const CookedSlipSlice = createSlice(
    {
        name: 'cookedSlip',
        initialState,
        reducer: {},
        extraReducers: (builder) => {
            builder.addCase(getOddsSlips.pending, (state) => {
                state.isLoading = true
            }).addCase(getOddsSlips.fulfilled, (state, { payload }) => {
                state.isLoading = false
                console.log("payload odd: ", payload);
                state.oddsData = payload
                state.error = false
            }).addCase(getOddsSlips.rejected, (state, { payload }) => {
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
export default CookedSlipSlice.reducer