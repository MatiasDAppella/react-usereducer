export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ];

    case EDIT_TASK:
      return [
        ...state.map((task) => {
          if (task.id !== action.payload.id) return task;
          else
            return {
              ...task,
              text: action.payload.text,
            };
        }),
      ];

    case REMOVE_TASK:
      return [...state.filter((task) => task.id !== action.payload.id)];

    default:
      return [...state];
  }
}

const ADD_TASK = "add-task";
const EDIT_TASK = "edit-task";
const REMOVE_TASK = "remove-task";

export const types = {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
};
