import { useContext } from "react";

import { StudentContext } from "../contexts/Student";

const PresentStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentContext);
	// derived State
	const presentList = studentStates.students.filter(
		(student) => student.isPresent === true,
	);
	return (
		<div className="list present-list">
			<h2>Present Students</h2>
			<ul>
				{presentList.map((item) => (
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
			</ul>
		</div>
	);
};

export default PresentStudentList;
