import Title from "../components/Title";
import Button from "../components/Button";
import { useCounter } from "../hooks/useCounter";

const CounterPage = () => {
	const { counter: counter2, isEven, increaseHandler } = useCounter(10, 50);
	return (
		<div className="App">
			<Title />

			<div className="counter-app">
				<p>The value of the Counter is: {counter2}</p>
				<p>{isEven}</p>
				<Button clickHandler={increaseHandler} />
			</div>
		</div>
	);
};

export default CounterPage;
