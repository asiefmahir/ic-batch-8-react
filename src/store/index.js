// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// // import { ourMiddleWare } from "./middlewares";

// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// import { cartReducer } from "./reducers/cart";
// import { postReducer } from "./reducers/post";
// import { todoReducer } from "./reducers/todo";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// 	post: postReducer,
// 	todo: todoReducer,
// });

// export const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(logger, thunk)),
// );

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import { cartReducer } from "./reducers/cart";
import postReducer from "./reducers/post";
import todoReducer from "./reducers/todo";
import { apiSlice } from "../features/api/apiSlice";

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
	post: postReducer,
	todo: todoReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDM) => getDM().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

// Action Data type -> String, Object, Function
