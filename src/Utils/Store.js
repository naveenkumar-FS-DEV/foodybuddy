import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Utils/CartSlice'


export const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    },
})
