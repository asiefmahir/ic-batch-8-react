import { useContext } from "react";

import { StudentContext } from "../contexts/Student";

const PresentStudentList = () => {
	const { students, toggleHandler } = useContext(StudentContext);
	// derived State
	const presentList = students.filter(
		(student) => student.isPresent === true,
	);
	return (
		<div className="list present-list">
			<h2>Present Students</h2>
			<ul>
				{presentList.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => toggleHandler(item)}>
							Accidentally Added
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PresentStudentList;
