import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

const App = () => {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);
	return (
		<div className="App">
			<StudentForm
				studentName={studentName}
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				editMode={editMode}
				setEditMode={setEditMode}
				editableStudent={editableStudent}
				setEditableStudent={setEditableStudent}
			/>
			<StudentSection
				students={students}
				setStudents={setStudents}
				setEditMode={setEditMode}
				setEditableStudent={setEditableStudent}
				setStudentName={setStudentName}
			/>
		</div>
	);
};

export default App;
