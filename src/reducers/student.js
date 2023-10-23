/**
 * 
 * const initState = {
	studentName: "",
	students: [],
	editMode: false,
	editableStudent: null,
};
 */

// const CHANGE_STUDENT_NAME = CHANGE_STUDENT_NAME

export const studentReducer = (state, action) => {
    switch(action.type) {

        case "CHANGE_STUDENT_NAME" : {
            return {
                ...state,
                studentName: action.payload
            }
        }
        case "CREATE_STUDENT" : {
            const newStudent = {
                id: Date.now() + '',
                name: state.studentName,
                isPresent: undefined
            };

            return {
                ...state,
                students: [...state.students, newStudent],
                studentName: ''
            }
        }

        case "EDIT_STUDENT" : {
            return {
                ...state,
                editMode: true,
                editableStudent: action.payload,
                studentName: action.payload.name
            }
        }

        // dispatch({type: "EDIT_STUDENT", payload: {id: "1", name: "mahir", isPresent: undefined}})

        

        case "REMOVE_STUDENT" : {
            return {
                ...state,
                students: state.students.filter((student) => student.id !== action.payload)
            }
        }

        case "UPDATE_STUDENT" : {
            return {
                ...state,
                students: state.students.map((student) => {
                    if (student.id === action.payload.studentID) {
                        return {
                            ...student,
                            [action.payload.propertyName]: action.payload.propertyValue
                        }
                    }

                    return student
                }),
                editMode: action.payload.propertyName === 'name' ? false : state.editMode,
                editableStudent: action.payload.propertyName === 'name' ? null : state.editableStudent,
                studentName: action.payload.propertyName === 'name' ? "" : state.studentName
            }
        }

        // dispatch({type: "UPDATE_STUDENT", payload: {studentID: "1", propertyName: "isPresent", propertyValue: true}})

        

        default : {
            return state;
        }
    }
}