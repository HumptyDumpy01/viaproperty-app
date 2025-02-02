import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: `navigation`,
  initialState: {
    // define some initial values for your app
    // e.g. counter: 0,
    appSettings: {
      currency: `USD`,
      language: `EN`
    },
    userInitials: ``,
    userEmail: ``
  },
  // here, by using createSlice method,
  // in reducers we specify the functions that would be
  // accessible, We do nt need to write boilerplate if checks code
  reducers: {
    // we can perform such operations easily, because
    // immer redux package would ensure the correct
    // work of updating the state
    toggleCurrency(state, action: PayloadAction<`USD` | `GRN` | `EUR`>) {
      state.appSettings.currency = action.payload;
    },
    toggleLanguage(state, action: PayloadAction<`EN` | `RU` | `UA`>) {
      state.appSettings.language = action.payload;
    },
    changeUserInitials(state, action: PayloadAction<string>) {
      state.userInitials = action.payload;
    },
    changeUserEmail(state, action: PayloadAction<string>) {
      state.userEmail = action.payload;
    }
  }
});

// here you should export the actions in order for dispatch function to use it
export const navigationSliceActions
  = navigationSlice.actions;
export default navigationSlice.reducer;
