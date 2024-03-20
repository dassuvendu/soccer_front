import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../store/Api";
import errorHandler from "../store/ErrorHandler";



export const CompTeams = createAsyncThunk(
    'comTeams',
    async (h2h, { rejectWithValue }) => {
        try {
            const response = await api.post('/api/team_comparison', h2h);
            if (response.status) {

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
export const serachTeam = createAsyncThunk(
    'searchTeam',
    async (name, { rejectWithValue }) => {
        try {
            console.log("team Name: ", name);
            const response = await api.post('/api/search_team', name);
            if (response.status) {

                return response.data?.data?.response;
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
    comparisons: [],
    teams: []
}
const TeamComparisonSlice = createSlice(
    {
        name: 'getComps',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(CompTeams.pending, (state) => {
                state.isLoading = true;
            }).addCase(CompTeams.fulfilled, (state, { payload }) => {
                state.isLoading = false
                console.log("team comparison", payload);
                state.comparisons = payload
            }).addCase(CompTeams.rejected, (state, { payload }) => {
                state.error = true;
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            }).addCase(serachTeam.pending, (state) => {
                state.isLoading = true;
            }).addCase(serachTeam.fulfilled, (state, { payload }) => {
                state.isLoading = false
                console.log("search Teams: ", payload);
                state.teams = payload
                state.error = false
            }).addCase(serachTeam.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
        }
    }
)
export default TeamComparisonSlice.reducer