import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from "../reducers/darkModeSlice";
import LeagueSlice from '../reducers/LeagueSlice';
import PredictionsSlice from '../reducers/PredictionsSlice';
import CookedSlipSlice from '../reducers/CookedSlipSlice';
import profileSlice from '../reducers/profileSlice';
import authSlice from '../reducers/authSlice';
import planSlice from '../reducers/planSlice';
import paymentSlice from '../reducers/paymentSlice';
import TeamComparisonSlice from '../reducers/TeamComparisonSlice';
import PlayerComparision from '../reducers/PlayerComparision';
import MyPredictionSlice from '../reducers/MyPredictionSlice';
import CheckUnlockSlice from '../reducers/CheckUnlockSlice';
import formationSlice from '../reducers/formationSlice';
import StatisticsSlice from '../reducers/StatisticsSlice';
import RecentPredictionSlice from '../reducers/RecentPredictionSlice';
import uuidSlice from '../reducers/uuidSlice';


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
    teamComparision: TeamComparisonSlice,
    playerComparision: PlayerComparision,
    myPredictions: MyPredictionSlice,
    IsunLock: CheckUnlockSlice,
    formation: formationSlice,
    statistics: StatisticsSlice,
    recentPredicts: RecentPredictionSlice,
    uuid:uuidSlice
  },
  devTools: import.meta.env.DEV,
});

export default store;
