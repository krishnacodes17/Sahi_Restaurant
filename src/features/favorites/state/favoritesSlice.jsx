import { createSlice } from "@reduxjs/toolkit";

const getFavoritesFromStorage = () => {
  const data = localStorage.getItem("favorites");
  if (!data) return [];
  return JSON.parse(data);
};

const setFavoritesToStorage = (data) => {
  localStorage.setItem("favorites", JSON.stringify(data));
};

export const favoritesSlice = createSlice({
  name: "favorites",

  initialState: {
    items: getFavoritesFromStorage(),
  },

  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(product);
      }

      setFavoritesToStorage(state.items);
    },

    clearFavorites: (state) => {
      state.items = [];
      setFavoritesToStorage(state.items);
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
