import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

// we can put any reducer here aand combiner them.
export default combineReducers({
  task: taskReducer
});
