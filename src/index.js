import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/router";
import BoardProvider from "./contexts/Board";
import ListProvider from "./contexts/List";
import TaskProvider from "./contexts/Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BoardProvider>
			<ListProvider>
				<TaskProvider>
					<RouterProvider router={router} />
				</TaskProvider>
			</ListProvider>
		</BoardProvider>
	</React.StrictMode>,
);

// setTimeout(() => {}, 5000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
