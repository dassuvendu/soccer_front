import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';

export const referral = createAsyncThunk(
    'user/refer',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('user/ref-count', userInput);
            console.log("response: ",response);
            if (response?.status === 200) {
            //    console.log("response: ",response?.data);
                return response.data;
            } else {
                
                // Handle the case when status code is not 200
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            let errors = errorHandler(error);
            return rejectWithValue(errors);
        }
    }
);

const initialState = {
    message: null,
    error: null,
    loading: false,
    data:[]
};

const RefContSlice = createSlice({
    name: 'ref',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(referral.pending, (state) => {
                state.loading = true;
                state.message = null;
            })
            .addCase(referral.fulfilled, (state, { payload }) => {
                state.isloadingEditProfile = false;
                state.loading = false;
                state.data = payload
            })
            .addCase(referral.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })
    }
});
export default RefContSlice.reducer;