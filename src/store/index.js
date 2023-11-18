import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

// import { ourMiddleWare } from "./middlewares";

import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import { cartReducer } from "./reducers/cart";
import { postReducer } from "./reducers/post";
import { todoReducer } from "./reducers/todo";

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
	post: postReducer,
	todo: todoReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, thunk)),
);

// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// import cartReducer from "./reducers/cart";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// });

// export const store = configureStore({
// 	reducer: rootReducer,
// });

// Action Data type -> String, Object, Function
