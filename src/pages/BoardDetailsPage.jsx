import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { BoardContext } from "../contexts/Board";
import { ListContext } from "../contexts/List";

import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";
import TaskList from "../components/TaskList";

const BoardDetails = () => {
	const [editMode, setEditMode] = useState(false);
	const [listTitle, setListTitle] = useState("");

	const { boardId } = useParams();

	const { dispatchBoardAction } = useContext(BoardContext);
	const { lists, dispatchListAction } = useContext(ListContext);

	const renderedList = lists.filter((item) => item.boardId === boardId);

	const submitHandler = (e) => {
		e.preventDefault();
		const listId = Date.now() + "";

		dispatchListAction({
			type: "CREATE_LIST",
			payload: {
				id: listId,
				title: listTitle,
				boardId: boardId,
			},
		});

		dispatchBoardAction({
			type: "ADD_LIST_ID_TO_BOARD",
			payload: {
				id: boardId,
				listId: listId,
			},
		});

		setEditMode(false);
		setListTitle("");
	};

	return (
		<div className="d-flex m-top-sm flex-direction-row">
			<Link to="/">Back to Boards</Link>
			{renderedList.map((taskList) => (
				<TaskList key={taskList.id} taskList={taskList} />
				// <p key={taskList.id}>{taskList.title}</p>
			))}

			{!editMode ? (
				<AddItem listAddItem={true} setEditMode={setEditMode} />
			) : (
				<AddItemForm
					title={listTitle}
					listForm={true}
					onChangeHandler={(e) => {
						setListTitle(e.target.value);
					}}
					setEditMode={setEditMode}
					submitHandler={submitHandler}
				/>
			)}
		</div>
	);
};

export default BoardDetails;
