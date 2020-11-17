import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//? Storage is the actual localStorage object
import storage from "redux-persist/lib/storage";
import { IApplicationState } from "../store/store";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { directoryReducer } from "./directoryReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers<IApplicationState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
