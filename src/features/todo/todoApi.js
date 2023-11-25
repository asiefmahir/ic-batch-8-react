import { apiSlice } from "../api/apiSlice";

export const todoApi = apiSlice.injectEndpoints({
	// refetchOnMountOrArgChange: true,
	endpoints: (builder) => ({
		getAllTodos: builder.query({
			query: () => `?_limit=5`,
			providesTags: ["Todos"],
			transformResponse: (res) => {
				return res.sort((a, b) => b.id - a.id);
			},

			// refetchOnMountOrArgChange: true
		}),

		removeTodo: builder.mutation({
			query: (todoId) => ({
				url: `/${todoId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Todos"],
		}),

		createTodo: builder.mutation({
			query: (todo) => ({
				url: `/`,
				method: "POST",
				body: todo,
			}),

			invalidatesTags: ["Todos"],
		}),
	}),
});

export const {
	useGetAllTodosQuery,
	useRemoveTodoMutation,
	useCreateTodoMutation,
} = todoApi;
