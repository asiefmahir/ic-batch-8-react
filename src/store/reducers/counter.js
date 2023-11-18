export const counterReducer = (state = 8, action) => {
	switch (action.type) {
		case "counter/increment": {
			return state + action.payload;
		}
		case "counter/decrement": {
			return state - action.payload;
		}

		default: {
			return state;
		}
	}
};

// import { createReducer } from "@reduxjs/toolkit";

// const initState = 8;

// export const counterReducer = createReducer(initState, (builder) => {
// 	builder
// 		.addCase("counter/increment", (state, action) => {
// 			return state + action.payload;
// 		})
// 		.addCase("counter/decrement", (state, action) => {
// 			return state - action.payload;
// 		})
// 		.addDefaultCase((state) => {
// 			return state;
// 		});
// });
