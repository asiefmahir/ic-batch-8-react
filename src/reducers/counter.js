export const counterReducer = (state, action) => {
	console.log(state, "state");
	console.log(action, "action");

	switch (action.type) {
		case "INCREASE_COUNTER_VALUE": {
			return state + action.payload;
		}

		case "DECREASE_COUNTER_VALUE": {
			return state - action.payload;
		}

		default: {
			return state;
		}
	}
};