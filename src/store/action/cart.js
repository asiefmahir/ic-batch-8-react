export const addToCart = (product) => {
	return {
		type: "cart/addToCart",
		payload: product,
	};
};

export const removeFromCart = (productId) => {
	return {
		type: "cart/removeFromCart",
		payload: productId,
	};
};

export const modifyQuantityOfAnItem = (obj) => {
	return {
		type: "cart/modifyQuantityOfAnItem",
		payload: obj,
	};
};

export const clearCart = () => {
	return {
		type: "cart/clearCart",
	};
};
// import {
// 	addToCart,
// 	removeFromCart,
// 	modifyQuantityOfAnItem,
// 	clearCart,
// } from "../reducers/cart";

// export { addToCart, removeFromCart, modifyQuantityOfAnItem, clearCart };
