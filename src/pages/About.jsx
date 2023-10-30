import { useState, useCallback, useMemo } from "react";
import Title from "../components/Title";
import Button from "../components/Button";

const About = () => {
	console.log("App is rendering");
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(5);
	const increaseHandler = useCallback(() => {
		setCounter((current) => current + 1); // 0 + 1 = 1 // 1 + 1 = 2
	}, []); // 00FFHH //FF55EE

	// const decreaseHandler = () => {
	// 	setCounter(counter - 1);
	// }; // 55GGDD

	const increaseHandler2 = useCallback(() => {
		setCounter2((current) => current + 5);
	}, []); // 22TTBB // 88EEYY

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 999999999) {
			i++;
		}
		return counter % 2 === 0
			? "Counter value is even"
			: "Cunter value is odd";
	}, [counter]);

	// const decreaseHandler2 = () => {
	// 	setCounter2(counter2 - 5);
	// };
	return (
		<div className="App">
			<Title />
			<Title />
			<Title />
			<Title />
			<Title />

			<div className="counter-app">
				<p>The value of the Counter is: {counter}</p>
				<p>{isEven}</p>
				<Button clickHandler={increaseHandler} />
			</div>
			<hr />
			<div className="counter-app-2">
				<p>The value of the Counter2 is: {counter2}</p>
				<Button clickHandler={increaseHandler2} />
			</div>
		</div>
	);
};

export default About;
