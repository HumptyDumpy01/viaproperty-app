import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const propertyDescriptionSlice = createSlice({
  name: `property-description`,
  initialState: {
    responsiveSidebarOpen: false
  },
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.responsiveSidebarOpen = action.payload;
    }
  }
});

// here you should export the actions in order for dispatch function to use it
export const propertyDescriptionSliceActions
  = propertyDescriptionSlice.actions;
export default propertyDescriptionSlice.reducer;
