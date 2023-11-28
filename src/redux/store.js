// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../Features/Cart/Cart.Slice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const rootReducer = { cartReducer };
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default function StoreComponent() {
//   let store = configureStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// }

// export const store = configureStore({
//   reducer: {
//     cartReducer,
//   },
// });
// redux persist code
// import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import rootReducer from "./reducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// normal component
// import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/Cart/Cart.Slice";

// export const store = configureStore({
//   reducer: {
//     cartReducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export const persistor = persistStore(store);
