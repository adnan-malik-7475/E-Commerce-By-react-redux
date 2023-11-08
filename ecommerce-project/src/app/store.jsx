import { configureStore } from "@reduxjs/toolkit";

// import productReducer from "../app/features/productSlice";
import productsSlice from "./features/Slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
export default store;
