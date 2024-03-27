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
export const getHPlayers = createAsyncThunk(
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
export const getAPlayers = createAsyncThunk(
    'APlayers',
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
            }).addCase(getHFormation.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(getHPlayers.pending, (state,) => {
                state.isLoading = true
            }).addCase(getHPlayers.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
                state.Hplayers = payload             
            }).addCase(getHPlayers.rejected, (state, { payload }) => {
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
            }).addCase(getAPlayers.pending, (state,) => {
                state.isLoading = true
            }).addCase(getAPlayers.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.error = false
                state.Aplayers = payload             
            }).addCase(getAPlayers.rejected, (state, { payload }) => {
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