import { Component } from "react";

class CounterAppWithClass extends Component {
	state = {
		counter: 66,
	};

	increaseHandler = (payload) => {
		this.setState({
			...this.state,
			counter: this.state.counter + payload,
		});
	};

	decreaseHandler = (payload) => {
		this.setState({
			...this.state,
			counter: this.state.counter - payload,
		});
	};

	render() {
		// console.log("I am being rerendered");
		const { counter } = this.state;
		return (
			<div>
				<h2>This is a Counter App</h2>
				<p>The value of the counter is {counter}</p>
				<button onClick={() => this.increaseHandler(1)}>
					Increase By 1
				</button>
				<button onClick={() => this.increaseHandler(10)}>
					Increase By 10
				</button>
				<button onClick={() => this.decreaseHandler(3)}>
					Decrease By 3
				</button>
				<button onClick={() => this.decreaseHandler(5)}>
					Decrease By 5
				</button>
			</div>
		);
	}
}

export default CounterAppWithClass;
