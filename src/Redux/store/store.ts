import {
  applyMiddleware,
  createStore,
  Store,
  Middleware,
} from "redux";
import { persistStore } from "redux-persist";
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

const store: Store<IApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

const storage = {
  persistor,
  store,
};

export default storage;
