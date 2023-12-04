export const metadata = {
	title: "About Page",
	description: "About Page Details",
};

const AboutLayout = ({ children }) => {
	return (
		<>
			<ul>
				<li>Headig 1</li>
			</ul>
			<body>{children}</body>
		</>
	);
};

export default AboutLayout;
