import { useDispatch } from "react-redux";
import {
	changeBgColor,
	changeTextColor,
	resetTheme,
} from "../store/action/theme";

const ThemeController = () => {
	const dispatch = useDispatch();
	return (
		<div className="theme-buttons">
			<div className="bg-btn-group">
				<button onClick={() => dispatch(changeBgColor("blue"))}>
					Change Background to Blue
				</button>
				<button onClick={() => dispatch(changeBgColor("green"))}>
					Change Background to Green
				</button>
				<button onClick={() => dispatch(changeBgColor("purple"))}>
					Change Background to Purple
				</button>
			</div>
			<br />
			<div className="text-btn-group">
				<button onClick={() => dispatch(changeTextColor("yellow"))}>
					Change Text Color to Yellow
				</button>
				<button onClick={() => dispatch(changeTextColor("magenta"))}>
					Change Text Color to Magenta
				</button>
				<button onClick={() => dispatch(changeTextColor("red"))}>
					Change Text Color to Red
				</button>
			</div>
			<div className="reset-button">
				<button onClick={() => dispatch(resetTheme())}>
					Reset Theme
				</button>
			</div>
		</div>
	);
};

export default ThemeController;
