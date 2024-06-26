import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';


export const getFixtures = createAsyncThunk(
  'user/getFixtures',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/fixtures',userInput);
      if (response.status === 200) {
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
);
export const getPastFixtures = createAsyncThunk(
  'user/getPastFixtures',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/fixtures',userInput);
      if (response.status === 200) {
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
);
export const getFixturesByleague = createAsyncThunk(
  'user/getFixturesbyleague',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/leagues',userInput);
      if (response.status === 200) {
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
);
export const getleagueByid = createAsyncThunk(
  'user/getleagueByid',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/leagues',userInput);
      if (response.status === 200) {
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
);
// export const getSeasons = createAsyncThunk(
//   'user/getSeasons',
//   async (userInput, { rejectWithValue }) => {
//     try {
//       const response = await api.post('/api/seasons',userInput);
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         let errors = errorHandler(response);
//         return rejectWithValue(errors);
//       }
//     } catch (err) {
//       let errors = errorHandler(err);
//       return rejectWithValue(errors);
//     }
//   }
// );
// export const postpredictions = createAsyncThunk(
//   'user/getpredic',
//   async (userInput, { rejectWithValue }) => {
//     try {
//       const response = await api.post('/api/predictions',userInput);
//       if (response.status === 200) {
          
//         return response.data.data;
//       } else {
//         let errors = errorHandler(response);
//         return rejectWithValue(errors);
//       }
//     } catch (err) {
//       let errors = errorHandler(err);
//       return rejectWithValue(errors);
//     }
//   }
// );
// export const pagination = createAsyncThunk(
//   'user/pagination',
//   async (userInput, { rejectWithValue }) => {
//     try {
//       const response = await api.post('/api/fixtures',userInput);
//       if (response.status === 200) { 
         
//         return response.data.data;
//       } else {
//         let errors = errorHandler(response);
//         return rejectWithValue(errors);
//       }
//     } catch (err) {
//       let errors = errorHandler(err);
//       return rejectWithValue(errors);
//     }
//   }
// );
export const LastHomeResult = createAsyncThunk(
  'user/LasthomeResult',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/fixtures',userInput);
      if (response?.status === 200) { 
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
);
export const LastAwayResult = createAsyncThunk(
  'user/LastawayResult',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/fixtures',userInput);
      if (response?.status === 200) { 
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
);
export const LastResult = createAsyncThunk(
  'user/LastResult',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/predictions',userInput);
      if (response?.status === 200) { 
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
);
export const Formation = createAsyncThunk(
  'user/formation',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/fixture_formation',userInput);
      if (response?.status === 200) { 
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
);
const initialState = {
  message: null,
  error: null,
  isLoading: false,
  fixtures: [],
  pastFix:[],
  allLeague: [],
  seasons:[],
  // page:[],
  lastHomeResult:[],
  lastAwayResult:[],
  lastResult:[],
  predict:[],
  h2h:[],
  teamResult:[],
  format:[],
  minute:[],
};

const PredictionsSlice = createSlice({
  name: 'fixtures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFixtures.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getFixtures.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.fixtures = payload; 
      })
      .addCase(getFixtures.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      })
      .addCase(getFixturesByleague.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getFixturesByleague.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.allLeague = payload; 
      })
      .addCase(getFixturesByleague.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      })
      // .addCase(getSeasons.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      //   state.message = null;
      // })
      // .addCase(getSeasons.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.seasons = payload;
      // })
      // .addCase(getSeasons.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = true;
      //   state.message = payload?.message || 'Something went wrong. Try again later.';
      // })
      
      .addCase(LastHomeResult.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(LastHomeResult.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.lastHomeResult = payload; 
     
      })
      .addCase(LastHomeResult.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      })
      .addCase(LastAwayResult.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(LastAwayResult.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.lastAwayResult = payload; 
      })
      .addCase(LastAwayResult.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      })
      .addCase(LastResult.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(LastResult.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.h2h = payload.data[0].h2h;
        state.predict = payload.data[0].predictions;
        state.teamResult = payload.data[0].teams;
        state.lastResult = payload; 
      })
      .addCase(LastResult.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      })
      .addCase(Formation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(Formation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.h2h = payload.data[0].h2h;
        state.format = payload; 
        
      })
      .addCase(Formation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      }) 
      .addCase(getleagueByid.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getleagueByid.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.h2h = payload.data[0].h2h;
        state.seasons = payload?.data[0]?.seasons; 
        
      })
      .addCase(getleagueByid.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      })
      .addCase(getPastFixtures.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(getPastFixtures.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      state.pastFix = payload 
        
      })
      .addCase(getPastFixtures.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload?.message || 'Something went wrong. Try again later.';
      })
  },
});

export default PredictionsSlice.reducer;
