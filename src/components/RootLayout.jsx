import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const RootLayout = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};

export default RootLayout;
