import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from '@/components/PropertyDescription/Layout/PropertyComments';

const propertyDescriptionSlice = createSlice({
  name: `property-description`,
  initialState: {
    responsiveSidebarOpen: false,
    activeComments: `Reviews`,
    optimisticPropertyQuestions: []
  },
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.responsiveSidebarOpen = action.payload;
    },
    changeActiveComments(state, action: PayloadAction<CommentType>) {
      state.activeComments = action.payload;
    }
  }
});

// here you should export the actions in order for dispatch function to use it
export const propertyDescriptionSliceActions
  = propertyDescriptionSlice.actions;
export default propertyDescriptionSlice.reducer;
