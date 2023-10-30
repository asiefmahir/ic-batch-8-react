import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Posts, { loader as postsLoader } from "../pages/Posts";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import PostDetailsError from "../pages/PostDeatilsError";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/posts",
				element: <Posts />,
				loader: async () =>
					fetch(
						`https://jsonplaceholder.typicode.com/posts?_limit=5`,
					),
			},
			{
				path: "posts/:postId",
				errorElement: <PostDetailsError />,
				element: <PostDetails />,
			},
		],
	},
]);