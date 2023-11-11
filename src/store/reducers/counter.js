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
