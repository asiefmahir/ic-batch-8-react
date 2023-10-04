import React from "react";

const InterestSection = (props) => {
	return (
		<div className="interests">
			<h2>My Interests:</h2>
			<ul>
				{props.interests.map((interest) => (
					<li key={interest}>{interest}</li>
				))}
			</ul>
		</div>
	);
};

export default InterestSection;
