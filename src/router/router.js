import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Shop from "../pages/Shop";
import CounterTheme from "../pages/CounterTheme";
import Cart from "../pages/Cart";
import Posts from "../pages/Posts";
import TodoList from "../pages/TodoList";
import AddProductForm from "../pages/AddProductForm";
import AllProducts from "../pages/AllProducts";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <Shop /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/counter-theme", element: <CounterTheme /> },
			{ path: "/posts", element: <Posts /> },
			{ path: "/todos", element: <TodoList /> },
			{ path: "/product/add", element: <AddProductForm /> },
			{ path: "/products", element: <AllProducts /> },
		],
	},
]);
