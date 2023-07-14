import {configureStore} from '@reduxjs/toolkit';
import plantslice from './slices/plantslice';

export const store = configureStore({
  reducer: {
    plantSlice: plantslice,
    //  themeSlice: themeSlice,
    //  placeslice:placeslice
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
