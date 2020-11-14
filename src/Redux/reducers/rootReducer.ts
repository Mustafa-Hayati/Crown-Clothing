import { combineReducers } from "redux";
import { IApplicationState } from "../store/store";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers<IApplicationState>({
  user: userReducer,
  cart: cartReducer,
});
