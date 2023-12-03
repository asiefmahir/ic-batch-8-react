import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {cartReducer} from '@/store/reducers/cart';

const rootReducer = combineReducers({
    cart: cartReducer
});

export const store = configureStore({
    reducer: rootReducer,
})