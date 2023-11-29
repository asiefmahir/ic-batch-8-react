// hoc -> Higher Order Component

import { Component } from "react";

export const withFetch = (WrappedComponent, url, initState) => {
	// Posts, Todos
	class WrapperComponent extends Component {
		state = {
			data: initState,
			isLoading: true,
			errorMessage: "",
		};

		componentDidMount() {
			fetch(url)
				.then((res) => res.json())
				.then((result) => {
					this.setState({
						...this.state,
						data: result,
						isLoading: false,
						errorMessage: "",
					});
				})
				.catch((err) => {
					this.setState({
						...this.state,
						errorMessage: err.message,
						isLoading: false,
						data: [],
					});
				});
		}

		render() {
			return (
				<WrappedComponent
					isLoading={this.state.isLoading}
					data={this.state.data}
					errorMessage={this.state.errorMessage}
				/>
			);
		}
	}

	return WrapperComponent;
};
