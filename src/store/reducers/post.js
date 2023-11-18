const initState = {
	isLoading: true,
	data: [],
	errorMessage: "",
};

export const postReducer = (state = initState, action) => {
	switch (action.type) {
		case "post/fetchStarted": {
			return {
				...state,
				isLoading: true,
			};
		}

		case "post/fetchSuccess": {
			return {
				...state,
				isLoading: false,
				data: action.payload,
				errorMessage: "",
			};
		}

		case "post/fetchFailed": {
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
