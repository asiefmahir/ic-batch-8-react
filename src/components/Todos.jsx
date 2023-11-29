import { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class Todos extends Component {
	render() {
		const { isLoading, data: todos, errorMessage } = this.props;
		return (
			<div className="all-todos">
				<h1>All Todos</h1>
				{isLoading && <p>Loading...</p>}
				{errorMessage && <p>{errorMessage}</p>}
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Todos;
