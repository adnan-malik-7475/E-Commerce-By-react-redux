import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    favouriteProducts: [],
    moveAllToCart: [],
    searchTerm: "",
  },
  reducers: {
    addCartItem(state, action) {
      state.cart.push(action.payload);
    },
    moveAllToCart(state, action) {
      state.moveAllToCart.push(...action.payload);
    },
    addFavouriteItem(state, action) {
      state.favouriteProducts.push(action.payload);
    },
    removeAllCartItems(state) {
      state.cart = [];
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
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
  removeAllCartItems,
  setSearchTerm,
  updateCartItemQuantity,
} = productsSlice.actions;
export default productsSlice.reducer;
