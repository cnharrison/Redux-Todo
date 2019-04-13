import { ADD_TODO } from "../actions";

const initialState = {
  todos: [
    {
      name: "Do shit",
      completed: false
    }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        name: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
