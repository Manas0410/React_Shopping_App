import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/Cart/Cart.Slice";

export const store = configureStore({
  reducer: {
    cartReducer,
  },
});
