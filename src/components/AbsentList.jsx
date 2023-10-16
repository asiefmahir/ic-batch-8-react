import { useContext } from "react";

import { StudentContext } from "../contexts/Student";

const AbsentList = () => {
	const { students, toggleHandler } = useContext(StudentContext);
	const absentList = students.filter(
		(student) => student.isPresent === false,
	);
	return (
		<div className="list absent-list">
			<h2>Absent Students</h2>
			{absentList.map((item) => (
				<li key={item.id}>
					<span>{item.name}</span>
					<button onClick={() => toggleHandler(item)}>
						Accidentally Added
					</button>
				</li>
			))}
		</div>
	);
};

export default AbsentList;
