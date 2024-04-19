import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/api";
import errorHandler from "../store/errorHandler";

export const getStatistics = createAsyncThunk(
    'statistics',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/statistics',userInput);
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
export const getDeshStatistics = createAsyncThunk(
    'Deshstatistics',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/all_statistics',userInput);
            if (response.status) {

                return response?.data?.data;
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
    statistics: [],
    DeshStatistics:[],
    error: false
}

const StatisticsSlice = createSlice(
    {
        name: 'stats',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getStatistics.pending, (state) => {
                state.isLoading = true;
            }).addCase(getStatistics.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.statistics = payload;
            }).addCase(getStatistics.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(getDeshStatistics.pending, (state) => {
                state.isLoading = true;
            }).addCase(getDeshStatistics.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.DeshStatistics = payload;
            }).addCase(getDeshStatistics.rejected, (state, { payload }) => {
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
export default StatisticsSlice.reducer