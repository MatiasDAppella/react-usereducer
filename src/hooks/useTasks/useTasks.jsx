import reducer from "./reducer";
import { types } from "./reducer";
import { useReducer } from "react";

export default function useTasks (initialState){
  const [tasks, dispatch] = useReducer(reducer, initialState)
  
  const addNewTask = (text) => dispatch({
    type: types.ADD_TASK,
    payload: {
      id: nextId++,
      text
    }
  })
  
  const editTask = (id, text) => dispatch({
    type: types.EDIT_TASK,
    payload: {
      id,
      text
    }
  })

  const removeTask = (id) => dispatch({
    type: types.REMOVE_TASK,
    payload: {
      id
    }
  })

  let nextId = initialState.length

  return {
    tasks,
    addNewTask,
    editTask,
    removeTask
  }
}
