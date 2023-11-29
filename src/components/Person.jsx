import { Component } from "react";

class Person extends Component {
	render() {
		// console.log(this.props);
		const { name, age } = this.props;
		return (
			<div>
				<h2>The person's name is {name}</h2>
				<h2>The Person's age is {age}</h2>
			</div>
		);
	}
}

export default Person;
