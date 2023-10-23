import { useReducer, createContext } from "react";
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
