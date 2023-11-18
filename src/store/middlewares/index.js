export const ourMiddleWare = (store) => (next) => async (action) => {
	// action === fetchAllPost
	// action === fetchAllTodo
	if (typeof action === "function") {
		action(store);
		return;
		// fetchAllTodo(store)
		// fetchAllPost(store)
	}

	next(action);
};
