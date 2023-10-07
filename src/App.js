import "./App.css";
import { useState } from "react";

// function App() {
// 	console.log("I am being Re-Rendered");
// 	// State-> Dynamic Data in React
// 	// let counter = 10;
// 	const [dynamicCounter, setDynamicCounter] = useState(200);
// 	const [counter2, setCounter2] = useState(100);

// 	// dynamicCounter++
// 	// console.log(janiNah, "janiNah");

// 	const increaseHandler = (payload) => {
// 		setDynamicCounter(dynamicCounter + payload); //  1 + 1 // 50
// 		// setDynamicCounter(200 + 1); setDynamicCounter(201)
// 		// 201
// 		// dynamicCounter = 201

// 		// setDynamicCounter(201 + 1); setDynamicCounter(202)
// 		// dynamicCounter = 202
// 		// Expression/ Value -> Expression -> Value -> dynamicCounter = Value
// 		// counter++;
// 		// console.log(counter);
// 	};

// 	const decreaseHandler = (payload) => {
// 		setDynamicCounter(dynamicCounter - payload);
// 		// counter--;
// 		// console.log(counter);
// 	};

// 	const increaseHandler2 = () => {
// 		setCounter2(counter2 + 1);
// 	};

// 	const decreaseHandler2 = () => {
// 		setCounter2(counter2 - 1);
// 	};

// 	return (
// 		<div className="App">
// 			<h2>The current value of the counter is {dynamicCounter}</h2>
// 			<button onClick={() => increaseHandler(1)}>Increase By 1</button>
// 			<button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
// 			<button onClick={() => increaseHandler(10)}>Increase By 10</button>
// 			<button onClick={() => decreaseHandler(5)}>Decrease By 5</button>

// 			<hr />
// 			<h2>The current value of the counter is {counter2}</h2>
// 			<button onClick={increaseHandler2}>Increase By 1</button>
// 			<button onClick={decreaseHandler2}>Decrease By 1</button>
// 		</div>
// 	);
// }

// App()
/**
 * 3 rules to be a component
 * 1) Component must be a Function
 * 2) It should return 'something'
 * 3) This 'something' should be some html-ish code -> JSX
 */

const App = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	/**
	 * note = {
	 * 		id: 1,
	 * 		title: "My First Note"
	 *
	 * }
	 */

	const createHandler = (event) => {
		event.preventDefault();
		if (!noteTitle) {
			return alert("Please Enter Note Title");
		}
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		setNotes([...notes, newNote]); //
		// notes = [...notes, newNote]
		setNoteTitle("");
		//noteTitle = ""
	};
	const removeHandler = (noteId) => {
		// 2
		const newNotes = notes.filter((note) => note.id !== noteId);
		// 							(({id: 1, title: note-1}) => 1 !== 2)
		//							(({id: 2, title: note-2}) => 2 !== 2)

		setNotes(newNotes);
		// notes = [{id: 1, title: note-1}, {id: 2, title: note-2}, {id: 3, title: note-3}] --> Removed/ Falaya Dibe
		// notes = [{id: 1, title: note-1}, {id: 2, title: note-2}]
	};

	return (
		<div className="App">
			<form onSubmit={createHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(event) => setNoteTitle(event.target.value)}
				/>
				<button type="submit">Add Note</button>
			</form>
			<ul className="note-list">
				{notes.map((note) => (
					<li key={note.id}>
						<span>{note.title}</span>
						<button>Edit</button>
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
