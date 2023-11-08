import { useState, useContext } from "react";
import { Droppable } from "react-beautiful-dnd";

import { icons } from "../assets";

import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";

import { BoardContext } from "../contexts/Board";
import { ListContext } from "../contexts/List";
import { TaskContext } from "../contexts/Task";
import TaskCard from "./TaskCard";

const TaskList = ({ taskList }) => {
	const [editMode, setEditMode] = useState(false);
	const [taskTitle, setTaskTitle] = useState("");

	const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);
	const { dispatchListAction } = useContext(ListContext);
	const { dispatchBoardAction } = useContext(BoardContext);

	const submitHandler = (e) => {
		e.preventDefault();
		const taskId = Date.now() + "";
		dispatchTaskAction({
			type: "CREATE_TASK",
			payload: {
				id: taskId,
				title: taskTitle,
				listId: taskList.id,
				boardId: taskList.boardId,
			},
		});

		dispatchListAction({
			type: "ADD_TASK_ID_TO_LIST",
			payload: {
				id: taskList.id,
				taskId: taskId,
			},
		});

		dispatchBoardAction({
			type: "ADD_TASK_ID_TO_BOARD",
			payload: {
				id: taskList.boardId,
				taskId: taskId,
			},
		});
		setEditMode(false);
		setTaskTitle("");
	};

	const removeHandler = () => {
		dispatchListAction({ type: "REMOVE_LIST", payload: taskList.id });
		// const tasksToBeRemoved = allTasks.filter(
		// 	(item) => item.listId === taskList.id,
		// );
		// tasksToBeRemoved.forEach((item) => {
		// 	dispatchTaskAction({ type: "REMOVE_TASK", payload: item.id });
		// });

		taskList.tasks.forEach((taskId) => {
			dispatchTaskAction({ type: "REMOVE_TASK", payload: taskId });
		});
		dispatchBoardAction({
			type: "REMOVE_LIST_ID_FROM_BOARD",
			payload: { id: taskList.boardId, listId: taskList.id },
		});
	};

	return (
		<Droppable droppableId={taskList.id}>
			{(provided) => {
				// console.log(provided);

				return (
					<div
						{...provided.droppableProps}
						className="list-container"
						ref={provided.innerRef}
					>
						<div className="list-title-container">
							<h5>{taskList.title}</h5>
							<img
								onClick={removeHandler}
								src={icons.crossIcon}
								alt=""
								className="add-item-icon"
							/>
						</div>
						{taskList.tasks
							.map((item) => {
								//['task -1', 'task-2']
								// ['task-2', 'task-1']
								return allTasks.find((ele) => ele.id === item);
							})
							.map((task, index) => (
								<TaskCard
									key={task.id}
									task={task}
									index={index}
								/>
								// <p key={task.id}>{task.title}</p>
							))}
						{provided.placeholder}
						{!editMode ? (
							<AddItem setEditMode={setEditMode} />
						) : (
							<AddItemForm
								title={taskTitle}
								onChangeHandler={(e) => {
									setTaskTitle(e.target.value);
								}}
								setEditMode={setEditMode}
								submitHandler={submitHandler}
							/>
						)}
					</div>
				);
			}}
		</Droppable>
	);
};

export default TaskList;
