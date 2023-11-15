// export const cartReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case "cart/addToCart": {
// 			const product = state.find((item) => item.id === action.payload.id);

// 			return product
// 				? state.map((item) => {
// 						if (item.id === action.payload.id) {
// 							return { ...item, quantity: item.quantity + 1 };
// 						}
// 						return item;
// 				  })
// 				: [...state, { ...action.payload, quantity: 1 }];
// 		}

// 		case "cart/removeFromCart": {
// 			return state.filter((item) => item.id !== action.payload);
// 		}
// 		case "cart/modifyQuantityOfAnItem": {
// 			return state.map((item) => {
// 				if (item.id === action.payload.id) {
// 					return { ...item, quantity: action.payload.quantity };
// 				}
// 				return item;
// 			});

// 			// const desiredIndex = state.findIndex((item) => item.id === action.payload.id);
// 			// state[desiredIndex].quantity = action.payload.quantity;
// 		}

// 		case "cart/clearCart": {
// 			return [];
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };

// import { createReducer } from "@reduxjs/toolkit";
// import {
// 	addToCart,
// 	removeFromCart,
// 	modifyQuantityOfAnItem,
// 	clearCart,
// } from "../action/cart";

// export const cartReducer = createReducer([], (builder) => {
// 	builder
// 		.addCase(addToCart.type, (state, action) => {
// 			const product = state.find((item) => item.id === action.payload.id);
// 			if (product) {
// 				product.quantity++;
// 			} else {
// 				state.push({ ...action.payload, quantity: 1 });
// 			}
// 		})
// 		.addCase(removeFromCart.type, (state, action) => {
// 			return state.filter((item) => item.id !== action.payload);
// 		})
// 		.addCase(modifyQuantityOfAnItem, (state, action) => {
// 			const productIndex = state.findIndex(
// 				(item) => item.id === action.payload.id,
// 			);
// 			state[productIndex].quantity = action.payload.quantity;
// 		})
// 		.addCase(clearCart, (state) => {
// 			return [];
// 		});
// });

import { createSlice } from "@reduxjs/toolkit";

const initState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState: initState,
	reducers: {
		addToCart(state, action) {
			const product = state.find((item) => item.id === action.payload.id);
			if (product) {
				product.quantity++;
			} else {
				state.push({ ...action.payload, quantity: 1 });
			}
		},

		removeFromCart(state, action) {
			return state.filter((item) => item.id !== action.payload);
		},

		modifyQuantityOfAnItem(state, action) {
			const productIndex = state.findIndex(
				(item) => item.id === action.payload.id,
			);
			state[productIndex].quantity = action.payload.quantity;
		},

		clearCart() {
			return [];
		},
	},
});

export const { addToCart, removeFromCart, modifyQuantityOfAnItem, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;
