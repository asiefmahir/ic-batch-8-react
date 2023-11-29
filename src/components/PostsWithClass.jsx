import { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class PostWithClass extends Component {
	state = {
		counter: 80,
	};

	// LifeCycle Methods

	componentDidUpdate(prevProps, prevState) {
		// console.log(prevProps, "prevProps");
		// console.log(prevState, "prevState");
		if (prevState.counter !== this.state.counter) {
			alert(`The counter value has been updated`);
		}
	}

	// useEffect(() => {
	// 	alert(`The counter value has been updated`);
	// 	return () => {}
	// }, [counter])

	// componentWillUnmount() {

	// }
	render() {
		console.log("I am rerendering from Posts");
		const { counter } = this.state;
		const { data: posts, isLoading, errorMessage } = this.props;
		return (
			<div>
				<div className="counter-app">
					<p>The value of the counter is {counter}</p>
					<button
						onClick={() =>
							this.setState({
								...this.state,
								counter: counter + 1,
							})
						}
					>
						Increase By 1
					</button>
				</div>
				<div className="all-post">
					<h1>All Posts</h1>
					{isLoading && <p>Loading...</p>}
					{errorMessage && <p>{errorMessage}</p>}
					<ul>
						{posts.map((post) => (
							<li key={post.id}>{post.title}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default withFetch(
	PostWithClass,
	`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	[],
);
