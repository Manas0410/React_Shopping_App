import { configureStore } from "@reduxjs/toolkit";
import storeReducerSlice from "./slice";

export const store = configureStore({
  reducer: {
    storeSlice: storeReducerSlice,
  },
});
