export const fetchAllTodo = async (dispatch) => {
	dispatch({ type: "todo/fetchStarted" });
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos?_limit=5`,
		);

		const todos = await response.json();
		dispatch({ type: "todo/fetchSuccess", payload: todos });
		return;
	} catch (e) {
		dispatch({ type: "todo/fetchFailed", payload: e.message });
	}
};
