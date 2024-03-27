import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";
import errorHandler from "../store/ErrorHandler";

export const getHFormation = createAsyncThunk(
    'HFormation',
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
export const getPlayers = createAsyncThunk(
    'HPlayers',
    async (user, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/fixture_formation',user);
            if (response.status) {

                return response.data.data.response;
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
export const getAFormation = createAsyncThunk(
    'AFormation',
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
    Hformat:[],
    Aformate:[],
    Hplayers:[],
    Aplayers:[]
}
const CheckUnlockSlice = createSlice(
    {
        name: 'check',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(getHFormation.pending, (state,) => {
                state.isLoading = true
            }).addCase(getHFormation.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
                state.Hformat = payload
                state.Hplayers = payload.response.startXI                
            }).addCase(getHFormation.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(getPlayers.pending, (state,) => {
                state.isLoading = true
            }).addCase(getPlayers.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
                state.Hplayers = payload  
                console.log("k",payload);             
            }).addCase(getPlayers.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(getAFormation.pending, (state,) => {
                state.isLoading = true
            }).addCase(getAFormation.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
                state.Aformate = payload
                state.Aplayers = payload.startXI 
            }).addCase(getAFormation.rejected, (state, { payload }) => {
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