import Nav from "./Nav";

const RootLayout = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default RootLayout;
