import {createStore, combineReducers, applyMiddleware} from 'redux';
import {mySaga, todos} from "./todos/reducer";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const reducerTodos = combineReducers(
  {
    todos
  }
);

export const store = createStore(
  reducerTodos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(mySaga)
