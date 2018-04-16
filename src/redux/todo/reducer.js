import {createReducer} from "../../Utils";
import {TOGGLE, INIT} from "./actions";

const initialState = {
  value: '',
  completed: false
};

const actionHandler ={
  [TOGGLE]: (state) => ({...state, completed: !state.completed}),
  [INIT]: (state, action) => ({...state, value: action.payload.value})
};

export const todo = createReducer(actionHandler, initialState);