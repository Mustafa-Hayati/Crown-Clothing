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
import { ICartState } from "../types/cartTypes";

export interface IApplicationState {
  user: IUserState;
  cart: ICartState;
}

const middlewares: Middleware[] = [logger];

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
}
