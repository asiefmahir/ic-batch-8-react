import { useContext } from "react";

import { StudentContext } from "../contexts/Student";

const AbsentList = () => {
	const { studentStates, dispatch } = useContext(StudentContext);
	const absentList = studentStates.students.filter(
		(student) => student.isPresent === false,
	);
	return (
		<div className="list absent-list">
			<h2>Absent Students</h2>
			{absentList.map((item) => (
				<li key={item.id}>
					<span>{item.name}</span>
					<button
						onClick={() => {
							dispatch({
								type: "UPDATE_STUDENT",
								payload: {
									studentID: item.id,
									propertyName: "isPresent",
									propertyValue: !item.isPresent,
								},
							});
						}}
					>
						Accidentally Added
					</button>
				</li>
			))}
		</div>
	);
};

export default AbsentList;
