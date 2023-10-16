import { useContext } from "react";

import { StudentContext } from "../contexts/Student";

const StudentForm = () => {
	const studentCtx = useContext(StudentContext);

	return (
		<form className="student-form" onSubmit={studentCtx.submitHandler}>
			<input
				type="text"
				value={studentCtx.studentName}
				onChange={(e) => studentCtx.setStudentName(e.target.value)}
			/>
			<button type="submit">
				{studentCtx.editMode ? "Update Student" : "Add Student"}
			</button>
		</form>
	);
};

export default StudentForm;
