import Title from "../components/Title";
import Button from "../components/Button";
import { useCounter } from "../hooks/useCounter";

const About = () => {
	const { counter, increaseHandler, isEven } = useCounter(10, 6);
	return (
		<div className="App">
			<Title />

			<div className="counter-app">
				<p>The value of the Counter is: {counter}</p>
				<p>{isEven}</p>
				<Button clickHandler={increaseHandler} />
			</div>
		</div>
	);
};

export default About;
