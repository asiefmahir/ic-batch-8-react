const AllStudentList = (props) => {
	const editHandler = (student) => {
		props.setEditMode(true);
		props.setStudentName(student.name);
		props.setEditableStudent(student);
	};

	const removeHandler = (studentID) => {
		const newStudentList = props.students.filter(
			(student) => student.id !== studentID,
		);

		props.setStudents(newStudentList);
	};

	const makePresentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(`The student is already in a list`);
		}
		const newStudentList = props.students.map((item) => {
			if (item.id === student.id) {
				if (item.id === student.id) {
					return { ...item, isPresent: true };
				}
			}
			return item;
		});

		props.setStudents(newStudentList);
	};
	const makeAbsentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(`The student is already in a list`);
		}
		const newStudentList = props.students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: false };
			}
			return item;
		});

		props.setStudents(newStudentList);
	};
	return (
		<div className="list all-students">
			<h2>All Students</h2>
			<ul>
				{props.students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => editHandler(student)}>
							Edit
						</button>
						<button onClick={() => removeHandler(student.id)}>
							Delete
						</button>
						<button onClick={() => makePresentHandler(student)}>
							Make present
						</button>
						<button onClick={() => makeAbsentHandler(student)}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
