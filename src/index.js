import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { RouterProvider } from "react-router-dom";

import "./index.css";

// import { router } from "./router/router";
import App from "./App";

import { store } from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root.render);
root.render(
	<React.StrictMode>
		{/* <App2 /> */}
		{/* <StudentProvider>
      <App />
    </StudentProvider> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* <RouterProvider router={router} /> */}
	</React.StrictMode>,
);

// setTimeout(() => {}, 5000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
