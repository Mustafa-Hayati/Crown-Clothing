import {
  applyMiddleware,
  createStore,
  Store,
  Middleware,
  // compose
} from "redux";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";
import { IUserState } from "../types/userTypes";

export interface IApplicationState {
  user: IUserState;
}

const middlewares: Middleware[] = [logger];

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
}
