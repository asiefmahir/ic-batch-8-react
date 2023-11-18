const initState = {
	isLoading: true,
	data: [],
	errorMessage: "",
};

export const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case "todo/fetchStarted": {
			return {
				...state,
				isLoading: true,
			};
		}

		case "todo/fetchSuccess": {
			return {
				...state,
				isLoading: false,
				data: action.payload,
				errorMessage: "",
			};
		}

		case "todo/fetchFailed": {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				data: [],
			};
		}

		default: {
			return state;
		}
	}
};
