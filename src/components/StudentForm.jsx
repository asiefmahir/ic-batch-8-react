import { useContext } from "react";

import { StudentContext } from "../contexts/Student";

const StudentForm = () => {
	const { studentStates, dispatch } = useContext(StudentContext);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!studentStates.studentName.trim()) {
			alert("Please provide a valid name");
		}
		studentStates.editMode
			? dispatch({
					type: "UPDATE_STUDENT",
					payload: {
						studentID: studentStates.editableStudent.id,
						propertyName: "name",
						propertyValue: studentStates.studentName,
					},
			  })
			: dispatch({ type: "CREATE_STUDENT" });
	};

	return (
		<form className="student-form" onSubmit={submitHandler}>
			<input
				type="text"
				value={studentStates.studentName}
				onChange={(e) =>
					dispatch({
						type: "CHANGE_STUDENT_NAME",
						payload: e.target.value,
					})
				}
			/>
			<button type="submit">
				{studentStates.editMode ? "Update Student" : "Add Student"}
			</button>
		</form>
	);
};

export default StudentForm;
