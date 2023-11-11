const initThemeState = {
	bgColor: "#fff",
	textColor: "#000",
	// color: 'purple'
};
export const themeReducer = (state = initThemeState, action) => {
	switch (action.type) {
		case "theme/changeBgColor": {
			return {
				...state,
				bgColor: action.payload,
			};
		}

		case "theme/changeTextColor": {
			return {
				...state,
				textColor: action.payload,
			};
		}

		case "theme/reset": {
			return initThemeState;
		}

		default: {
			return state;
		}
	}
};
