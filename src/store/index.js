import { configureStore } from '@reduxjs/toolkit/';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;

export const uiAction = uiSlice.actions;
export const cartAction = cartSlice.actions;
