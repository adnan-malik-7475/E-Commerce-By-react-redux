import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    favouriteProducts: [],
    moveAllToCart: [],
    searchTerm: "",
    cartQuantity: 0,
  },
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addFavouriteItem(state, action) {
      state.favouriteProducts.push(action.payload);
    },
    removeAll(state) {
      state.cart = [];
    },

    moveAllToCart(state, action) {
      state.cart = [...action.payload];
    },
    updateCartItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const {
  addCartItem,
  moveAllToCart,
  addFavouriteItem,
  removeAll,
  setSearchTerm,
  updateCartItemQuantity,
} = productsSlice.actions;
export default productsSlice.reducer;
