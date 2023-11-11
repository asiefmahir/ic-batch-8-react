import { useSelector } from "react-redux";

import "./App.css";
import CounterApp from "./components/CounterApp";
import ThemeController from "./components/ThemeController";

const App = () => {
	const { bgColor, textColor } = useSelector((state) => state.theme);
	return (
		<div
			className="App"
			style={{ backgroundColor: bgColor, color: textColor }}
		>
			<h2>Hello Redux</h2>
			<hr />
			<CounterApp />
			<br />
			<ThemeController />
		</div>
	);
};

export default App;
