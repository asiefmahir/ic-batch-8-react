const StudentForm = (props) => {
	const createHandler = () => {
		const newStudent = {
			id: Date.now() + "",
			name: props.studentName,
			isPresent: undefined,
		};

		props.setStudents([...props.students, newStudent]);
		console.log(props.students);
		props.setStudentName("");
	};

	const updateHandler = () => {
		const updatedStudentList = props.students.map((student) => {
			if (student.id === props.editableStudent.id) {
				return { ...student, name: props.studentName };
			}
			return student;
		});

		props.setStudents(updatedStudentList);
		props.setEditMode(false);
		props.setStudentName("");
		props.setEditableStudent(null);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (!props.studentName.trim()) return;

		props.editMode ? updateHandler() : createHandler();
	};

	return (
		<form className="student-form" onSubmit={submitHandler}>
			<input
				type="text"
				value={props.studentName}
				onChange={(e) => props.setStudentName(e.target.value)}
			/>
			<button type="submit">
				{props.editMode ? "Update Student" : "Add Student"}
			</button>
		</form>
	);
};

export default StudentForm;
