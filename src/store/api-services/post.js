export const fetchAllPost = async (dispatch) => {
	dispatch({ type: "post/fetchStarted" });
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=5`,
		);
		const data = await res.json();
		dispatch({ type: "post/fetchSuccess", payload: data });
		return;
	} catch (e) {
		dispatch({ type: "post/fetchFailed", payload: e.message });
		return;
	}
};
