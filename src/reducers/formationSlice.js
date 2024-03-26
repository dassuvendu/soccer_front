import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";
import errorHandler from "../store/ErrorHandler";

export const getFormation = createAsyncThunk(
    'Formation',
    async (user, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/fixture_formation',user);
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
    format:[]
}
const CheckUnlockSlice = createSlice(
    {
        name: 'check',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(getFormation.pending, (state,) => {
                state.isLoading = true
            }).addCase(getFormation.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
                state.format = payload
            }).addCase(getFormation.rejected, (state, { payload }) => {
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