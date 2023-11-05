import { createBrowserRouter } from "react-router-dom";
import Boards from "../pages/Boards";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Boards />,
	},
]);
