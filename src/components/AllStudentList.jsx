import { useContext } from "react";

import { StudentContext } from "../contexts/Student";

const AllStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentContext);

	return (
		<div className="list all-students">
			<h2>All Students</h2>
			<ul>
				{studentStates.students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button
							onClick={() =>
								dispatch({
									type: "EDIT_STUDENT",
									payload: student,
								})
							}
						>
							Edit
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "REMOVE_STUDENT",
									payload: student.id,
								})
							}
						>
							Delete
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "UPDATE_STUDENT",
									payload: {
										studentID: student.id,
										propertyName: "isPresent",
										propertyValue: true,
									},
								})
							}
						>
							Make present
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "UPDATE_STUDENT",
									payload: {
										studentID: student.id,
										propertyName: "isPresent",
										propertyValue: false,
									},
								})
							}
						>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
