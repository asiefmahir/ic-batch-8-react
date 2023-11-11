export const increment = (value) => {
	return {
		type: "counter/increment",
		payload: value,
	};
};

export const decrement = (value) => {
	return {
		type: "counter/decrement",
		payload: value,
	};
};

// increment(10)
// {type: "counter/increment", payload: 10}
