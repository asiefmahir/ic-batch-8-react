import { memo } from "react";

const Button = ({ clickHandler }) => {
	console.log("Button is rendering");
	return <button onClick={clickHandler}>Increase Counter</button>;
};

export default memo(Button);

/**
 *  const increaseHandler = () => {
		setCounter(counter + 1);
	};

    const increaseHandler = () => {
		setCounter(counter + 1);
	};
 */
