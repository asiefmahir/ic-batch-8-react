// const initThemeState = {
// 	bgColor: "#fff",
// 	textColor: "#000",
// 	// color: 'purple'
// };
// export const themeReducer = (state = initThemeState, action) => {
// 	switch (action.type) {
// 		case "theme/changeBgColor": {
// 			return {
// 				...state,
// 				bgColor: action.payload,
// 			};
// 		}

// 		case "theme/changeTextColor": {
// 			return {
// 				...state,
// 				textColor: action.payload,
// 			};
// 		}

// 		case "theme/reset": {
// 			return initThemeState;
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };

import { createReducer } from "@reduxjs/toolkit";

const initThemeState = {
	bgColor: "#fff",
	textColor: "#000",
};

export const themeReducer = createReducer(initThemeState, (builder) => {
	builder
		.addCase("theme/changeBgColor", (state, action) => {
			state.bgColor = action.payload;
		})
		.addCase("theme/changeTextColor", (state, action) => {
			// state.textColor = action.payload;
			return {
				...state,
				textColor: action.payload,
			};
		})
		.addCase("theme/reset", (state) => {
			return initThemeState;
		})
		.addDefaultCase((state) => {
			return state;
		});
});
