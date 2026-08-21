import { createSlice } from "@reduxjs/toolkit";
import { getCartFromStorage, setCartToStorage } from "../../../shared/hook/getLocalStorageCart";

export const CartSlice = createSlice({
  name: "Carts",

  initialState: {
    recipes: getCartFromStorage(),
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.recipes.find((item) => {
        return item.id === product.id;
      });

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.recipes.push({
          ...product,
          quantity: 1,
        });
      }

      setCartToStorage(state.recipes);
    },

    removeFromCart: (state, action) => {
      state.recipes = state.recipes.filter((item) => {
        return item.id !== action.payload;
      });
      setCartToStorage(state.recipes);


    },

    increaseQuantity: (state, action) => {
      const item = state.recipes.find((item) => {
        return item.id === action.payload;
      });
      if (item) {
        item.quantity += 1;
      }

      setCartToStorage(state.recipes);
    },

    decreaseQuantity: (state, action) => {
      const item = state.recipes.find((item) => {
        return item.id === action.payload;
      });

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      setCartToStorage(state.recipes);
    },

    clearCart: (state) => {
      state.recipes = [];
      setCartToStorage(state.recipes);
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart} = CartSlice.actions;

export default CartSlice.reducer;
