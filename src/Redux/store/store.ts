import {
  applyMiddleware,
  createStore,
  Store,
  Middleware,
} from "redux";

import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import { IUserState } from "../types/userTypes";

export interface IApplicationState {
  user: IUserState;
}

const middlewares: Middleware[] = [logger];

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(...middlewares)
  );

  return store;
}
