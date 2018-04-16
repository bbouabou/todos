import React from "react";

export const Todo = ({ todo }) => (
  <span style={{textDecoration: todo.todo.completed ? "line-through": "none"}}>
  {todo.todo.value}
  </span>);