export const filterTodos = (state) => Object.keys(state.todos.todos).filter(elem =>{
  if (!state.todos.filter)
    return true;
  else if (state.todos.filter === 1 && !state.todos.todos[elem].completed)
    return true;
  else if (state.todos.filter === 2 && state.todos.todos[elem].completed)
    return true;
  return false;
});
