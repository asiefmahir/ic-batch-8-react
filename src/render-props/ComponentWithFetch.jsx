import React, { Component } from "react";

class ComponentWithFetch extends Component {
	state = {
		data: this.props.initData,
		isLoading: true,
		errorMessage: "",
	};

	componentDidMount() {
		fetch(this.props.url)
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					...this.state,
					isLoading: false,
					data: result,
					errorMessage: "",
				});
			})
			.catch((err) => {
				this.setState({
					...this.state,
					isLoading: false,
					data: [],
					errorMessage: err.message,
				});
			});
	}

	render() {
		const { data, isLoading, errorMessage } = this.state;
		return <>{this.props.children(data, isLoading, errorMessage)}</>;
	}
}

export default ComponentWithFetch;

{
	/* <ComponentWithFetch>
	<h2>The</h2>
</ComponentWithFetch> */
}
