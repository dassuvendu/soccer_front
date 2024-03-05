import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkmode',
    initialState: {
      mode: 'light', // Initial mode
    },
    reducers: {
      toggleTheme: state => {
        state.mode = state.mode === 'light' ? 'dark' : 'light';
      },
    },
  });
  
  export const { toggleTheme } = darkModeSlice.actions;
  export default darkModeSlice.reducer;
