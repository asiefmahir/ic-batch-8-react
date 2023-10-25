import { useState, useEffect } from "react";
import "./App.css";

// const App = () => {
// 	const [counter, setCounter] = useState(0);
// 	const [counter2, setCounter2] = useState(5);

// 	const [isLoading, setIsLoading] = useState(true);
// 	const [todos, setTodos] = useState([]);
// 	const [errorMessage, setErrorMessage] = useState("");

// 	useEffect(() => {
// 		console.log("Inside useEffect");
// 		fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setIsLoading(false);
// 				setTodos(data);
// 				setErrorMessage("");
// 			})
// 			.catch((error) => {
// 				setErrorMessage(error.message);
// 				setIsLoading(false);
// 				setTodos([]);
// 			});
// 	}, []);

// 	console.log("rendering");
// 	return (
// 		<div className="App">
// 			<h3>The value of the counter is {counter}</h3>
// 			<button onClick={() => setCounter(counter + 10)}>
// 				Increase By 10
// 			</button>
// 			<hr />
// 			<h3>The value of the counter2 is {counter2}</h3>
// 			<button onClick={() => setCounter2(counter2 + 5)}>
// 				Increase By 5
// 			</button>
// 			<h2>All todos</h2>
// 			{isLoading && <h2>Loading.......</h2>}
// 			{errorMessage && <h2>{errorMessage}</h2>}
// 			<ul>
// 				{todos.map((todo) => (
// 					<li key={todo.id}>{todo.title}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

const App = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);

	const getAllNotes = () => {
		fetch(`http://localhost:4000/notes`)
			.then((response) => response.json())
			.then((data) => setNotes(data));
	};

	useEffect(() => {
		// HTTP METHODS
		/**
		 * 1) GET -> Data get Request
		 * 2) POST -> DATA Creation
		 * 3) PUT/PATCH -> Data Update
		 * 4) DELETE -> Data Delete
		 */
		getAllNotes();
	}, []);

	const createHandler = (event) => {
		event.preventDefault();
		if (!noteTitle) {
			return alert("Please Enter Note Title");
		}
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		fetch(`http://localhost:4000/notes`, {
			method: "POST",
			body: JSON.stringify(newNote),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			getAllNotes();
			setNoteTitle("");
		});
	};
	const removeHandler = (noteId) => {
		fetch(`http://localhost:4000/notes/${noteId}`, {
			method: "DELETE",
		}).then(() => getAllNotes());
	};

	const editHandler = (note) => {
		setEditMode(true);
		setNoteTitle(note.title);
		setEditableNote(note);
	};

	const updateHandler = (event) => {
		event.preventDefault();

		if (!noteTitle.trim()) {
			return alert("Please Enter Note Title");
		}
		const updatedNotesArray = notes.map((note) => {
			if (note.id === editableNote.id) {
				return {
					...note,
					title: noteTitle,
				};
			}

			return note;
		});

		setNotes(updatedNotesArray);
		setEditMode(false);
		setEditableNote(null);
		setNoteTitle("");
	};

	return (
		<div className="App">
			<form onSubmit={editMode ? updateHandler : createHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(event) => setNoteTitle(event.target.value)}
				/>
				<button type="submit">
					{editMode ? "Update Note" : "Add Note"}
				</button>
			</form>
			<ul className="note-list">
				{notes.map((note) => (
					<li key={note.id}>
						<span>{note.title}</span>
						<button onClick={() => editHandler(note)}>Edit</button>
						<button onClick={() => removeHandler(note.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
