import React from "react";

const AbsentList = (props) => {
	const absentList = props.students.filter(
		(student) => student.isPresent === false,
	);
	return (
		<div className="list absent-list">
			<h2>Absent Students</h2>
			{absentList.map((item) => (
				<li key={item.id}>
					<span>{item.name}</span>
					<button onClick={() => props.toggleHandler(item)}>
						Accidentally Added
					</button>
				</li>
			))}
		</div>
	);
};

export default AbsentList;
