import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentList from "./AbsentList";

const StudentSection = () => {
	return (
		<div className="student-section">
			<AllStudentList />
			<PresentStudentList />
			<AbsentList />
		</div>
	);
};

export default StudentSection;
