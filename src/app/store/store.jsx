import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/state/authSlice";
import cartReducer from "../../features/cart/state/CartSlice";
import orderReducer from "../../features/orders/state/orderSlice";
import favoritesReducer from "../../features/favorites/state/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    orders: orderReducer,
    favorites: favoritesReducer,
  },
});
