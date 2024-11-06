import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: `navigation`,
  initialState: {
    // define some initial values for your app
    // e.g. counter: 0,
    appSettings: {
      currency: `USD`,
      language: `EN`
    }
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
    }

    // increment(state) {
    //     state.counter++;
    // },

    // each Reducer function receives two arguments: old state and dispatched action
    // incrementHandler(state, action) {
    //     state.counter = state.counter + action.payload;
    // }

  }
});

// here you should export the actions in order for dispatch function to use it
export const navigationSliceActions
  = navigationSlice.actions;
export default navigationSlice.reducer;
