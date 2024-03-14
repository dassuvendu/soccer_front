import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from "../reducers/darkModeSlice";
import LeagueSlice from '../reducers/LeagueSlice';
import AuthSlice from '../reducers/authSlice';
import PredictionsSlice from '../reducers/PredictionsSlice';


const store = configureStore({
  reducer: {
    darkmode: darkModeSlice,
    league: LeagueSlice,
    prediction: PredictionsSlice,
    auth: AuthSlice,
  },
  devTools: import.meta.env.DEV,
});

export default store;
