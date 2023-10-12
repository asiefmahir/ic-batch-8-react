import { useState } from "react";
import "./App.css";

const App = () => {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	// derived State
	const presentList = students.filter(
		(student) => student.isPresent === true,
	);
	const absentList = students.filter(
		(student) => student.isPresent === false,
	);

	// const [presentList, setPresentList] = useState([]);
	// const [absentList, setAbsentList] = useState([]);

	const createHandler = () => {
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: undefined,
		};

		setStudents([...students, newStudent]);
		setStudentName("");
	};

	const editHandler = (student) => {
		setEditMode(true);
		setStudentName(student.name);
		setEditableStudent(student);
	};

	const updateHandler = () => {
		const updatedStudentList = students.map((student) => {
			if (student.id === editableStudent.id) {
				return { ...student, name: studentName };
			}
			return student;
		});

		setStudents(updatedStudentList);
		setEditMode(false);
		setStudentName("");
		setEditableStudent(null);
	};
	const removeHandler = (studentID) => {
		const newStudentList = students.filter(
			(student) => student.id !== studentID,
		);
		// 1 !== 1
		// 2 !== 1
		// 3 !== 1

		setStudents(newStudentList);
	};

	const makePresentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(`The student is already in a list`);
		}
		const newStudentList = students.map((item) => {
			if (item.id === student.id) {
				if (item.id === student.id) {
					return { ...item, isPresent: true };
				}
			}
			return item;
		});

		setStudents(newStudentList);
	};
	const makeAbsentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(`The student is already in a list`);
		}
		const newStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: false };
			}
			return item;
		});

		setStudents(newStudentList);
	};

	const toggleHandler = (student) => {
		const newStudentList = students.map((item) => {
			if (item.id === student.id) {
				return { ...item, isPresent: !item.isPresent };
			}
			return item;
		});

		setStudents(newStudentList);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (!studentName.trim()) return;

		editMode ? updateHandler() : createHandler();
	};
	return (
		<div className="App">
			<form className="student-form" onSubmit={submitHandler}>
				<input
					type="text"
					value={studentName}
					onChange={(e) => setStudentName(e.target.value)}
				/>
				<button type="submit">
					{editMode ? "Update Student" : "Add Student"}
				</button>
			</form>
			<div className="student-section">
				<div className="list all-students">
					<h2>All Students</h2>
					<ul>
						{students.map((student) => (
							<li key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => editHandler(student)}>
									Edit
								</button>
								<button
									onClick={() => removeHandler(student.id)}
								>
									Delete
								</button>
								<button
									onClick={() => makePresentHandler(student)}
								>
									Make present
								</button>
								<button
									onClick={() => makeAbsentHandler(student)}
								>
									Make Absent
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="list present-list">
					<h2>Present Students</h2>
					<ul>
						{presentList.map((item) => (
							<li key={item.id}>
								<span>{item.name}</span>
								<button onClick={() => toggleHandler(item)}>
									Accidentally Added
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="list absent-list">
					<h2>Absent Students</h2>
					{absentList.map((item) => (
						<li key={item.id}>
							<span>{item.name}</span>
							<button onClick={() => toggleHandler(item)}>
								Accidentally Added
							</button>
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
