import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getOrderFromStorage, setOrderToStorage } from "./ordersAction";

const initialState = {
  orders: getOrderFromStorage(),
};
export const orderSlice = createSlice({
  name: "orders",

  initialState, 

  reducers: {
    // ================= CREATE ORDER =================

    createOrder: {
      reducer: (state, action) => {
        state.orders.unshift(action.payload);
        setOrderToStorage(state.orders);
      },

      prepare: (orderData) => {
        return {
          payload: {
            id: `ORD-${nanoid(8).toUpperCase()}`,
            ...orderData,
            status: "Preparing",
            createdAt: new Date().toISOString(),
          },
        };
      },
    },

    // ================= CANCEL ORDER =================

    cancelOrder: (state, action) => {
      const order = state.orders.find((order) => order.id === action.payload);

      if (order) {
        order.status = "Cancelled";
        setOrderToStorage(state.orders);
      }
    },

    // ================= CLEAR ORDERS =================

    clearOrders: (state) => {
      state.orders = [];
      setOrderToStorage(state.orders);
    },
  },
});

export const { createOrder, cancelOrder, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
