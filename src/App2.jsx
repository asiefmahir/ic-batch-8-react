import { useState, useReducer } from "react";

import { counterReducer } from "./reducers/counter";

const App2 = () => {
	// const [counter, setCounter] = useState(0)
	// setCounter(counter + 1)
	const [counter, dispatch] = useReducer(counterReducer, 10);
	return (
		<div>
			<p>The value of the counter is {counter}</p>
			<button
				onClick={() =>
					dispatch({ type: "INCREASE_COUNTER_VALUE", payload: 1 })
				}
			>
				Increase By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "DECREASE_COUNTER_VALUE", payload: 1 })
				}
			>
				Decrease By 1
			</button>
			<button
				onClick={() =>
					dispatch({ type: "INCREASE_COUNTER_VALUE", payload: 10 })
				}
			>
				Increase By 10
			</button>
			<button
				onClick={() =>
					dispatch({ type: "DECREASE_COUNTER_VALUE", payload: 5 })
				}
			>
				Decrease By 5
			</button>
		</div>
	);
};

export default App2;
