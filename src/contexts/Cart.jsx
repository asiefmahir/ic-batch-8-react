import { createContext, useReducer, useMemo } from "react";
import { cartReducer } from "@/reducers/cart";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, dispatchCartAction] = useReducer(cartReducer, []);

	const cartContextValue = useMemo(
		() => ({
			cart,
			dispatchCartAction,
		}),
		[cart],
	);

	return (
		<CartContext.Provider value={cartContextValue}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
