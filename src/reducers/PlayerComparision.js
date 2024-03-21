import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import errorHandler from '../store/ErrorHandler';
import api from '../store/Api';


export const getTeam = createAsyncThunk(
  'user/searchTeam',
  async (userInput, { rejectWithValue }) => {
      try {
          const response = await api.post('/api/search_team', userInput);
          if (response.status === 200) {
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

export const getPlayerName = createAsyncThunk(
  'user/getPlayerName',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/player_statistics',userInput);
      if (response.status === 200) {
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
);
export const getFPlayerDetails = createAsyncThunk(
  'user/getFPlayerDetails',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/player_statistics',userInput);
      if (response.status === 200) {
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
);
export const getSPlayerDetails = createAsyncThunk(
  'user/getSPlayerDetails',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/player_statistics',userInput);
      if (response.status === 200) {
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
);
const initialState = {
  message: null,
  error: null,
  isLoading: false,
  team:[],
  playerList: [],
  playerFDetails : [],
  playerSDetails : []
};

const PlayerListSlice = createSlice({
  name: 'PlayerList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlayerName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getPlayerName.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.playerList = payload; 
      })
      .addCase(getPlayerName.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      }).addCase(getTeam.pending, (state) => {
        state.isLoading = false
    }).addCase(getTeam.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.team = payload
        state.error = false
    }).addCase(getTeam.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message =
            payload !== undefined && payload.message
                ? payload.message
                : 'Something went wrong. Try again later.';
    }).addCase(getFPlayerDetails.pending, (state) => {
      state.isLoading = false
  }).addCase(getFPlayerDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.playerFDetails = payload
      state.error = false
  }).addCase(getFPlayerDetails.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.message =
          payload !== undefined && payload.message
              ? payload.message
              : 'Something went wrong. Try again later.';
  }).addCase(getSPlayerDetails.pending, (state) => {
    state.isLoading = false
}).addCase(getSPlayerDetails.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.playerSDetails = payload
    state.error = false
}).addCase(getSPlayerDetails.rejected, (state, { payload }) => {
    state.isLoading = false;
    state.message =
        payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
})
  },
});

export default PlayerListSlice.reducer;
