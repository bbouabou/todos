import { createStore, combineReducers } from 'redux';
import {todos} from "./todos/reducer";

const reducerTodos = combineReducers(
  {
    todos
  }
);


export const store = createStore(
  reducerTodos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);