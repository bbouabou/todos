export const filterTodos = (state) => state.todos.todos.filter(elem =>{
  if (!state.todos.filter)
    return true;
  else if (state.todos.filter === 1 && !elem.todo.completed)
    return true;
  else if (state.todos.filter === 2 && elem.todo.completed)
    return true;
  return false;
});