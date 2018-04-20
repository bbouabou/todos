export const ADD_TODO = "ADD_TODO";
export const TOGGLE = "TOGGLE";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const ADD_TODO_ASYNC = "ADD_TODO_ASYNC";
export const ADD_IN_PROGRESS = "ADD_IN_PROGRESS";

export const addInProgress = () => ({
  type: ADD_IN_PROGRESS,
});

export const addTodo = (value) => ({
  type: ADD_TODO,
  payload:
    {
      value
    }
});
export const toggleChild = (id) => ({
  type: TOGGLE,
  payload:
    {
      id
    }
});
export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload:
    {
      filter
    }
});

/** saga */

export const addTodoAsync = (value) => ({
  type: ADD_TODO_ASYNC,
  payload:
    {
      value
    }
});
