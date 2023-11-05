/**
 * boards = [
 *     {
 *          id,
 *          title,
 *          lists: ['list-1', 'list-2'],
 *          tasks: ['task-1', 'task-2']  
 *     },
 *  {
 *          id,
 *          title,
 *          lists: ['list-1', 'list-2'],
 *          tasks: ['task-1', 'task-2']  
 *     },
 * ]
 */

export const boardReducer = (boards, action) => {
    switch (action.type) {
        case "CREATE_BOARD" : {
            const newBoard = {
                id: Date.now() + '',
                title: action.payload,
                lists: [],
                tasks: []
            }

            return [...boards, newBoard]
        }

        case "CHANGE_BOARD_NAME": {
            return boards.map(board => {
                if (board.id === action.payload.id) {
                    return {...board, title: action.payload.title}
                }

                return board
            })
        }

        case "REMOVE_BOARD": {
            return boards.filter(board => board.id !== action.payload)
        }

        case "ADD_LIST_ID_TO_BOARD" : {
            return boards.map(board => {
                if (board.id === action.payload.id) {
                    return {...board, lists: [...board.lists, action.payload.listId]}
                }

                return board
            })
        }

        case "REMOVE_LIST_ID_FROM_BOARD": {
            return boards.map(board => {
                if (board.id === action.payload.id) {
                    return {...board, lists: board.lists.filter(listId => listId !== action.payload.listId)}
                }

                return board
            })
        }

        case "ADD_TASK_ID_TO_BOARD" : {
            return boards.map(board => {
                if (board.id === action.payload.id) {
                    return {...board, tasks: [...board.tasks, action.payload.taskId]}
                }

                return board
            })
        }

        case "REMOVE_TASK_ID_FROM_BOARD": {
            return boards.map(board => {
                if (board.id === action.payload.id) {
                    return {...board, tasks: board.tasks.filter(taskId => taskId !== action.payload.taskId)}
                }

                return board
            })
        }

        default: {
            return boards
        }
    }
}