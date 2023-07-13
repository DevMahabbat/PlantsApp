import { configureStore } from "@reduxjs/toolkit";
import PlantSlice from "./slices/plantslice";


export const store = configureStore({
   reducer :{
    plantSlice: PlantSlice
   //  themeSlice: themeSlice,
   //  placeslice:placeslice

   }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;