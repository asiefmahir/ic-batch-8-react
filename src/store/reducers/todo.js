// const initState = {
// 	isLoading: true,
// 	data: [],
// 	errorMessage: "",
// };

// export const todoReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "todo/fetchStarted": {
// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		}

// 		case "todo/fetchSuccess": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				data: action.payload,
// 				errorMessage: "",
// 			};
// 		}

// 		case "todo/fetchFailed": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				errorMessage: action.payload,
// 				data: [],
// 			};
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllTodos = createAsyncThunk("todo/fetchTodos", async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos?_limit=5`,
	);
	return await res.json();
});

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		isLoading: true,
		data: [],
		errorMessage: "",
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllTodos.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchAllTodos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.errorMessage = "";
				state.data = action.payload;
			})
			.addCase(fetchAllTodos.rejected, (state, action) => {
				state.isLoading = false;
				state.errorMessage = action.payload;
			});
	},
});
export default todoSlice.reducer;
