import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: false,
  product: [],
  cart: [],
  forAddedToCart: {}, //keys are those which present in cart data
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    storeData: (state, action) => {
      state.product = action.payload;
    },
    storeCart: (state, action) => {
      const { id } = action.payload;
      state.cart = [...state.cart, action.payload];
      state.forAddedToCart[id] = action.payload;
    },
    addQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          item.quantity = item.quantity ? item.quantity + 1 : 2;
        }
        return item;
      });
    },
    minusQuantity: (state, action) => {
      const currentProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!currentProduct) {
        return;
      }

      const { quantity } = currentProduct;

      // No Quantity, then remove
      if (!quantity || quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        return;
      }

      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          item.quantity--;
        }
        return item;
      });
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      delete state.forAddedToCart[action.payload];
    },
    adminLog: (state) => {
      state.admin = true;
    },
    userLog: (state) => {
      state.admin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  storeData,
  storeCart,
  addQuantity,
  minusQuantity,
  removeItem,
  adminLog,
  userLog,
} = storeSlice.actions;

export default storeSlice.reducer;
