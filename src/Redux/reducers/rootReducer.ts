import { combineReducers } from "redux";
import { IApplicationState } from "../store/store";
import { userReducer } from "./userReducer";

export default combineReducers<IApplicationState>({
  user: userReducer,
});
