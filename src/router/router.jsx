import { createBrowserRouter } from "react-router-dom";
import Boards from "../pages/Boards";
import BoardDetailsPage from "../pages/BoardDetailsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Boards />,
	},
	{
		path: "/boards/:boardId",
		element: <BoardDetailsPage />,
	},
]);
