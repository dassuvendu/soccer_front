import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import errorHandler from "../store/errorHandler";
import api from "../store/api";

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
export const getslipDetails = createAsyncThunk(
    'slipDetails',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/odds_matches', id);
            if (response.status === 200) {
                console.log("single Slip", response.data);
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
export const getSlipInfo = createAsyncThunk(
    'slipInfo',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/odds_info', id);
            if (response.status === 200) {
                console.log("single Slip", response.data);
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
export const unlockSlip = createAsyncThunk(
    'unlockSlip',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/unlock_odds', data);
            if (response.status === 200) {
                console.log("unlock Slip", response.data);
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
export const userSlip = createAsyncThunk(
    'userSlip',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/user_odds', data);
            if (response.status === 200) {
                // console.log("unlock Slip", response.data);
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
    oddsData: [],
    isLoading: false,
    error: false,
    singleSlip: {},
    slipInfo: {},
    slipUnlock : [],
    userSlipDetails :[]
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

            }).addCase(getslipDetails.pending, (state) => {
                state.isLoading = true
            }).addCase(getslipDetails.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.singleSlip = payload
                state.error = false
            }).addCase(getslipDetails.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            }).addCase(getSlipInfo.pending, (state) => {
                state.isLoading = true
            }).addCase(getSlipInfo.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.slipInfo = payload

            }).addCase(getSlipInfo.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            }).addCase(unlockSlip.pending, (state) => {
                state.isLoading = true
            }).addCase(unlockSlip.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.slipUnlock= payload

            }).addCase(unlockSlip.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            }).addCase(userSlip.pending, (state) => {
                state.isLoading = true
            }).addCase(userSlip.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.userSlip= payload

            }).addCase(userSlip.rejected, (state, { payload }) => {
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