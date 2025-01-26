import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CommentType,
  PropertyQuestionsType,
  PropertyReviewsType
} from '@/components/PropertyDescription/Layout/PropertyComments';

const propertyDescriptionSlice = createSlice({
  name: `property-description`,
  initialState: {
    responsiveSidebarOpen: false,
    activeComments: `Questions`,
    optimisticPropertyQuestions: [] as PropertyQuestionsType[],
    optimisticPropertyReviews: [] as PropertyReviewsType[]
  },
  reducers: {
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.responsiveSidebarOpen = action.payload;
    },
    changeActiveComments(state, action: PayloadAction<CommentType>) {
      state.activeComments = action.payload;
    },
    pushOptimisticPropertyQuestion(state, action: PayloadAction<PropertyQuestionsType>) {
      state.optimisticPropertyQuestions = [...state.optimisticPropertyQuestions, action.payload];
    }
  }
});

// here you should export the actions in order for dispatch function to use it
export const propertyDescriptionSliceActions
  = propertyDescriptionSlice.actions;
export default propertyDescriptionSlice.reducer;
