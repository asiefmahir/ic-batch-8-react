import React from "react";

const PresentStudentList = (props) => {
	// derived State
	const presentList = props.students.filter(
		(student) => student.isPresent === true,
	);
	return (
		<div className="list present-list">
			<h2>Present Students</h2>
			<ul>
				{presentList.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => props.toggleHandler(item)}>
							Accidentally Added
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PresentStudentList;
