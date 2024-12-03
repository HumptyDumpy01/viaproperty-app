import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropertyType } from '@/utils/types/PropertyType';

const propertiesSlice = createSlice({
  name: `properties`,
  initialState: {
    // define some initial values for your app
    // e.g. counter: 0,
    openFilter: false,
    openMap: false,
    allPropertiesOriginal: [] as PropertyType[],
    properties: [] as PropertyType[],
    currentPage: 1
  },
  // here, by using createSlice method,
  // in reducers we specify the functions that would be
  // accessible, We do not need to write boilerplate if checks code
  reducers: {
    toggleFilter(state, action: PayloadAction<boolean>) {
      state.openFilter = action.payload;
    },
    toggleMap(state, action: PayloadAction<boolean>) {
      state.openMap = action.payload;
    },
    setProperties(state, action: PayloadAction<PropertyType[]>) {
      state.properties = action.payload;
    },
    setAllPropertiesOriginal(state, action: PayloadAction<PropertyType[]>) {
      state.allPropertiesOriginal = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    }
  }
});

// here you should export the actions in order for dispatch function to use it
export const propertiesActions
  = propertiesSlice.actions;
export default propertiesSlice.reducer;
