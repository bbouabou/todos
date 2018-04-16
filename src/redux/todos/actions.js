export const ADD_TODO = "ADD_TODO";
export const TOGGLE = "TOGGLE";
export const CHANGE_FILTER = "CHANGE_FILTER";

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