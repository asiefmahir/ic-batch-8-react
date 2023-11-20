// const initState = {
// 	isLoading: true,
// 	data: [],
// 	errorMessage: "",
// };

// export const postReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "post/fetchStarted": {
// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		}

// 		case "post/fetchSuccess": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				data: action.payload,
// 				errorMessage: "",
// 			};
// 		}

// 		case "post/fetchFailed": {
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

export const fetchAllPosts = createAsyncThunk("post/fetchPosts", async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	);
	const data = await res.json();
	return data;
});

const postSlice = createSlice({
	name: "post",
	initialState: {
		isLoading: true,
		data: [],
		errorMessage: "",
	},
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchAllPosts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchAllPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.errorMessage = "";
				state.data = action.payload;
			})
			.addCase(fetchAllPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.errorMessage = action.error.message;
				state.data = [];
			});
	},
});

export default postSlice.reducer;
