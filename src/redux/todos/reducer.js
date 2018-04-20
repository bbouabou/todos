import {createReducer} from "../../Utils";
import {ADD_IN_PROGRESS, ADD_TODO, addInProgress, CHANGE_FILTER, TOGGLE} from "./actions";
import uuid from "uuid/v1"
import {todo} from "../todo/reducer";
import {takeEvery, put} from "redux-saga/effects";
import { delay } from 'redux-saga'
import {addTodo as addTodoAction} from './actions'
const initialState = {
  filter: 0,
  loading: false,
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
  return {...state, todos: {...state.todos, [id]: todo(undefined, {...action, type: "INIT"})}, loading: false}
};

const actionHandler ={
  [ADD_TODO]: addTodo,
  [TOGGLE]: redispatchAction,
  [CHANGE_FILTER]: (state, action) => ({...state, filter: action.payload.filter}),
  [ADD_IN_PROGRESS]: (state) => ({...state, loading: true})
};


function* addTodoAsync(action) {
  yield put(addInProgress());
  yield delay(1000);
  yield put(addTodoAction(action.payload.value));

}
export const mySaga = function* mySaga() {
  yield takeEvery("ADD_TODO_ASYNC", addTodoAsync);
};

export const todos = createReducer(actionHandler, initialState);
