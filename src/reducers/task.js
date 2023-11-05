/**
 * tasks = [
 *      {
 *          id,
 *          title,
 *          boardId,
 *          listId
 *      }
 *
 * ]
 */

export const taskReducer = (tasks, action) => {
	switch (action.type) {
		case "CREATE_TASK": {
			const newTask = {
				id: Date.now() + "",
				title: action.payload.title,
				boardId: action.payload.boardId,
				listId: action.payload.listId,
			};

			return [...tasks, newTask];
		}

		case "REMOVE_TASK": {
			return tasks.filter((task) => task.id !== action.payload.id);
		}

		case "CHANGE_TASK_NAME": {
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, title: action.payload.title };
				}

				return task; // return task if task.id !== action.payload.id
			});
		}

		case "CHANGE_LIST_ID_OF_TASK": {
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, listId: action.payload.listId };
				}

				return task; // return task if task.id !== action.payload.id
			});
		}

		case "CHANGE_BOARD_ID_OF_TASK": {
			return tasks.map((task) => {
				if (task.id === action.payload.id) {
					return { ...task, boardId: action.payload.boardId };
				}

				return task; // return task if task.id !== action.payload.id
			});
		}

		default: {
			return tasks;
		}
	}
};
