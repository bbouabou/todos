import {createReducer} from "../../Utils";
import {ADD_TODO, CHANGE_FILTER, TOGGLE} from "./actions";
import uuid from "uuid/v1"
import {todo} from "../todo/reducer";

const initialState = {
  filter: 0,
  todos: [],
};

const redispatchAction = (state, action) => {
  const id = action.payload.id;
  const newTodos = state.todos.map(elem => (elem.id === id ? {...elem, todo: todo(elem.todo, action)} : elem));
  return {...state, todos: newTodos};
};

const actionHandler ={
  [ADD_TODO]: (state, action) => ({...state, todos: [...state.todos, {id: uuid(), todo: todo(undefined, {...action, type: "INIT"})}]}),
  [TOGGLE]: redispatchAction,
  [CHANGE_FILTER]: (state, action) => ({...state, filter: action.payload.filter})
};

export const todos = createReducer(actionHandler, initialState);