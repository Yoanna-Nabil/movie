import { configureStore } from "@reduxjs/toolkit";
import { favouriteReducer } from "./MoviesSlice";


export let store= configureStore({
    reducer: {
        favorites: favouriteReducer
    }
})