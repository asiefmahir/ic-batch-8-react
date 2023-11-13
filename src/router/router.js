import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Shop from "../pages/Shop";
import CounterTheme from "../pages/CounterTheme";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <Shop /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/counter-theme", element: <CounterTheme /> },
		],
	},
]);
