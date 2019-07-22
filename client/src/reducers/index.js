import { combineReducers } from "redux";

import taskReducer from "./taskReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

// we can put any reducer here aand combiner them.
export default combineReducers({
  task: taskReducer,
  error: errorReducer,
  auth: authReducer
});
