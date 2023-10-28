import { memo } from "react";

const Title = memo(() => {
	console.log("Title is Rendering");
	return (
		// <>
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// 	<Child1 />
		// </>
		<h2>Our counter App</h2>
	);
});

export default Title;
