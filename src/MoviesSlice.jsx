import { createSlice } from "@reduxjs/toolkit";

let initialState= {
    favorites: [],
}


let moviesSlice= createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
          },
          removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(
              (movie) => movie.id !== action.payload
            );
          },
    }
})

export const favouriteReducer= moviesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;
