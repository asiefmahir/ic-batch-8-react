import { useSelector, useDispatch } from "react-redux";
// import { fetchAllTodo } from "../store/api-services/todo";
import { fetchAllTodos } from "../store/reducers/todo";

const TodoList = () => {
	const dispatch = useDispatch();
	const {
		data: todos,
		isLoading,
		errorMessage,
	} = useSelector((state) => state.todo);

	const submitHandler = () => {
		dispatch(fetchAllTodos());
	};
	return (
		<div>
			<button onClick={submitHandler}>Load Todos</button>
			<div className="post-list">
				<h2>All Todos</h2>
				{isLoading && <h1>Loading.....</h1>}
				{errorMessage && <h1>{errorMessage}</h1>}
				<ul>
					{todos.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
