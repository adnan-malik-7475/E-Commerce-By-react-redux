import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    favouriteProducts: [],
    moveAllToCart: [],
    searchTerm: "",
    cartTotalQuantity: 0,
    cartTotalAmount:0,
  },
  reducers: {
    addCartItem(state, action) {
      const productToAdd = action.payload;

      const productInCart = state.cart.find(
        (item) => item.title === productToAdd.title
      );

      if (!productInCart) {
        state.cart.push(productToAdd);
      }
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
    increaseQuantity(state, action) {
      const productTitle = action.payload;
      const product = state.cart.find(
        (product) => product.title == productTitle
      );
      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity(state, action) {
      const productTitle = action.payload;
      const product = state.cart.find(
        (product) => product.title == productTitle
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
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
  increaseQuantity,
  decreaseQuantity,
  getTotals
} = productsSlice.actions;
export default productsSlice.reducer;
