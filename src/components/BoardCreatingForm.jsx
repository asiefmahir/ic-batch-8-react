import { useState, useContext } from "react";
import { BoardContext } from "../contexts/Board";

const BoardCreatingForm = () => {
	const [boardTitle, setBoardTitle] = useState("");

	const { dispatchBoardAction } = useContext(BoardContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatchBoardAction({ type: "CREATE_BOARD", payload: boardTitle });
		setBoardTitle("");
	};
	return (
		<div className="align-center m-top-md">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={boardTitle}
					onChange={(e) => setBoardTitle(e.target.value)}
				/>
				<button type="submit">Create Board</button>
			</form>
		</div>
	);
};

export default BoardCreatingForm;
