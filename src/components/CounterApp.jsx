import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/action/counter";

const CounterApp = () => {
	const ourCounter = useSelector((storeStates) => storeStates.counter);
	const dispatch = useDispatch();
	return (
		<div className="counter-app">
			<p>The value of the counter is {ourCounter}</p>
			<button onClick={() => dispatch(increment(10))}>
				Increment By 10
			</button>
			<button onClick={() => dispatch(increment(50))}>
				Increment By 50
			</button>
			<button onClick={() => dispatch(decrement(3))}>
				Decrement By 3
			</button>
			<button onClick={() => dispatch(decrement(7))}>
				Decrement By 7
			</button>
		</div>
	);
};

export default CounterApp;
