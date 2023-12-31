// import { createContext, useReducer, useMemo, useEffect } from "react";
// import { cartReducer } from "@/reducers/cart";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
// 	const [cart, dispatchCartAction] = useReducer(cartReducer, []);

// 	useEffect(() => {

// 	}, [])

// 	const cartContextValue = useMemo(
// 		() => ({
// 			cart,
// 			dispatchCartAction,
// 		}),
// 		[cart],
// 	);

// 	return (
// 		<CartContext.Provider value={cartContextValue}>
// 			{children}
// 		</CartContext.Provider>
// 	);
// };

// export default CartProvider;
import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	// load cart items from local storage on component mount
	useEffect(() => {
		const storedCartItems =
			JSON.parse(localStorage.getItem("cartItems")) || [];
		setCartItems(storedCartItems);
	}, []);

	// save cart items to local storage when cart items change
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems, cartItems.length]);

	// add to cart
	const addToCart = (payload) => {
		const product = cartItems?.find((item) => item?._id === payload?._id);

		let updatedCartItems;
		if (product) {
			updatedCartItems = cartItems?.map((item) =>
				item?._id === product?._id
					? { ...item, quantity: item?.quantity + 1 }
					: item,
			);
			setCartItems(updatedCartItems);
		} else {
			updatedCartItems = [...cartItems, { ...payload, quantity: 1 }];
			setCartItems(updatedCartItems);
		}
		localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
	};

	// remove from cart
	const removeFromCart = (productId) => {
		const updatedCartItems = cartItems?.filter(
			(item) => item?._id !== productId,
		);
		setCartItems(updatedCartItems);
		// update local storage
		if (typeof window !== "undefined") {
			localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
		}
	};

	// update quantity
	const updateQuantity = (product, quantity) => {
		const updatedItems = cartItems?.map((item) =>
			item?._id === product?._id ? { ...item, quantity } : item,
		);
		setCartItems(updatedItems);
		localStorage.setItem("cartItems", JSON.stringify(updatedItems));
	};

	const clearCart = () => {
		localStorage.removeItem("cartItems");
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
