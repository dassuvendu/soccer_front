import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from "../reducers/darkModeSlice";

const store = configureStore({
  reducer: {
    darkmode: darkModeSlice,
  },
  devTools: import.meta.env.DEV,
});

export default store;
