import {createReducer} from "../../Utils";
import {ADD_TODO, CHANGE_FILTER, TOGGLE} from "./actions";
import uuid from "uuid/v1"
import {todo} from "../todo/reducer";

const initialState = {
  filter: 0,
  todos: [],
};

const redispatchAction = (state, action) => {
  const {id} = action.payload;
  const todoById = state.todos[id];
  const newTodo = todo(todoById, action);
  return {...state, todos: {...state.todos, [id]: newTodo}};
};

const addTodo = (state, action) => {
  const id = uuid();
  return {...state, todos: {...state.todos, [id]: todo(undefined, {...action, type: "INIT"})}}
};

const actionHandler ={
  [ADD_TODO]: addTodo,
  [TOGGLE]: redispatchAction,
  [CHANGE_FILTER]: (state, action) => ({...state, filter: action.payload.filter})
};

export const todos = createReducer(actionHandler, initialState);
