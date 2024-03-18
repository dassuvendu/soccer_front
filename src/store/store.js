import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from "../reducers/darkModeSlice";
import LeagueSlice from '../reducers/LeagueSlice';
import PredictionsSlice from '../reducers/PredictionsSlice';
import CookedSlipSlice from '../reducers/CookedSlipSlice';
import profileSlice from '../reducers/profileSlice';
import authSlice from '../reducers/authSlice';
import planSlice from '../reducers/planSlice';
import paymentSlice from '../reducers/paymentSlice';


const store = configureStore({
  reducer: {
    darkmode: darkModeSlice,
    league: LeagueSlice,
    prediction: PredictionsSlice,

    cookedSlips: CookedSlipSlice,
    auth: authSlice,
    profile: profileSlice,
    plans: planSlice,
    payment: paymentSlice,
  },
  devTools: import.meta.env.DEV,
});

export default store;
