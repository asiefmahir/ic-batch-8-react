import { Component } from "react";
import Person from "../components/Person";
import CounterAppWithClass from "../components/CounterAppWIthClass";
import PostWithClass from "../components/PostsWithClass";
import Todos from "../components/Todos";
import ComponentWithFetch from "../render-props/ComponentWithFetch";

class ClassComponentsPractice extends Component {
	render() {
		return (
			<div>
				<h2>Class Components</h2>
				<p>This is a class component</p>
				<hr />
				<Person name="Mahir Asief" age={26} />
				<br />
				<Person name="Peyal Vai" age={25} />
				<hr />
				<CounterAppWithClass />
				<hr />
				<PostWithClass demo={55} />
				<hr />
				<ComponentWithFetch
					url={`https://jsonplaceholder.typicode.com/todos?_limit=5`}
					initData={[]}
				>
					{(data, isLoading, errorMessage) => (
						<Todos
							data={data}
							isLoading={isLoading}
							errorMessage={errorMessage}
						/>
					)}
				</ComponentWithFetch>
			</div>
		);
	}
}

export default ClassComponentsPractice;
