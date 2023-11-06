/**
 * lists = [
 *      {
 *          id,
 *          title,
 *          boardId,
 *          tasks: ['task-1',]
 *      },
 * {
 *          id,
 *          title,
 *          boardId,
 *          tasks: ['task-1', 'task-2']
 *      },
 * ]
 */

export const listReducer = (lists, action) => {
	switch (action.type) {
		case "CREATE_LIST": {
			const newList = {
				id: action.payload.id,
				title: action.payload.title,
				boardId: action.payload.boardId,
				tasks: [],
			};

			return [...lists, newList];
		}

		case "CHANGE_LIST_NAME": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return { ...list, title: action.payload.title };
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		case "REMOVE_LIST": {
			return lists.filter((list) => list.id !== action.payload);
		}

		case "CHANGE_BOARD_ID_OF_LIST": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return { ...list, boardId: action.payload.boardId };
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		case "ADD_TASK_ID_TO_LIST": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return {
						...list,
						tasks: [...list.tasks, action.payload.taskId],
					};
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		case "REMOVE_TASK_ID_FROM_LIST": {
			return lists.map((list) => {
				if (list.id === action.payload.id) {
					return {
						...list,
						tasks: list.tasks.filter(
							(taskId) => taskId !== action.payload.taskId,
						),
					};
				}

				return list; // return list if list.id !== action.payload.id
			});
		}

		default: {
			return lists;
		}
	}
};
