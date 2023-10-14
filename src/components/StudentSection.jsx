import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentList from "./AbsentList";

const StudentSection = (props) => {
	const toggleHandler = (student) => {
		const newStudentList = props.students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: !item.isPresent };
			}
			return item;
		});

		props.setStudents(newStudentList);
	};
	return (
		<div className="student-section">
			<AllStudentList
				students={props.students}
				setStudents={props.setStudents}
				setEditMode={props.setEditMode}
				setEditableStudent={props.setEditableStudent}
				setStudentName={props.setStudentName}
			/>
			<PresentStudentList
				students={props.students}
				toggleHandler={toggleHandler}
			/>
			<AbsentList
				students={props.students}
				toggleHandler={toggleHandler}
			/>
		</div>
	);
};

export default StudentSection;
