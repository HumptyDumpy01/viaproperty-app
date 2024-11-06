import { configureStore } from '@reduxjs/toolkit';
import propertiesSlice from '@/store/features/properties';
import propertyDescriptionSlice from '@/store/features/propertyDescription';
import navigationSlice from '@/store/features/navigation';

const store = configureStore({
  reducer: {
    properties: propertiesSlice,
    propertyDescription: propertyDescriptionSlice,
    navigation: navigationSlice
  }
});

export default store;

// type for accessing useSelector variables
export type RootState = ReturnType<typeof store.getState>;
// type for accessing reducers(action functions) in your store
export type AppDispatch = typeof store.dispatch;
