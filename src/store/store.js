import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from "../reducers/darkModeSlice";
import LeagueSlice from '../reducers/LeagueSlice';
import PredictionsSlice from '../reducers/PredictionsSlice';
<<<<<<< HEAD
import CookedSlipSlice from '../reducers/CookedSlipSlice';
=======
import profileSlice from '../reducers/profileSlice';
import authSlice from '../reducers/authSlice';
import planSlice from '../reducers/planSlice';
import paymentSlice from '../reducers/paymentSlice';
>>>>>>> 02917de1b742335b0945c60bdcdc6de2956907f5


const store = configureStore({
  reducer: {
    darkmode: darkModeSlice,
    league: LeagueSlice,
    prediction: PredictionsSlice,
<<<<<<< HEAD
    auth: AuthSlice,
    cookedSlips: CookedSlipSlice
=======
    auth: authSlice,
    profile: profileSlice,
    plans: planSlice,
    payment: paymentSlice,
>>>>>>> 02917de1b742335b0945c60bdcdc6de2956907f5
  },
  devTools: import.meta.env.DEV,
});

export default store;
