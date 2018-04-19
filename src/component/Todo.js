import React from "react";

export const Todo = ({ todo }) => (
  <span style={{textDecoration: todo.completed ? "line-through": "none"}}>
    {todo.value}
  </span>);
