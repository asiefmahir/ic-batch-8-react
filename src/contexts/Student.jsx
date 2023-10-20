import { useState, useReducer, createContext } from "react";
import { studentReducer } from "../reducers/student";

export const StudentContext = createContext();

const initState = {
	studentName: "",
	students: [],
	editMode: false,
	editableStudent: null,
};

const StudentProvider = ({ children }) => {
	const [studentStates, dispatch] = useReducer(studentReducer, initState);

	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	const createHandler = () => {
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: undefined,
		};

		setStudents([...students, newStudent]);
		console.log(students);
		setStudentName("");
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

	const submitHandler = (e) => {
		e.preventDefault();
		if (!studentName.trim()) return;

		editMode ? updateHandler() : createHandler();
	};

	const editHandler = (student) => {
		setEditMode(true);
		setStudentName(student.name);
		setEditableStudent(student);
	};

	const removeHandler = (studentID) => {
		const newStudentList = students.filter(
			(student) => student.id !== studentID,
		);

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

	const contextValue = {
		studentStates,
		dispatch,
	};
	return (
		<StudentContext.Provider value={contextValue}>
			{children}
		</StudentContext.Provider>
	);
};

export default StudentProvider;
