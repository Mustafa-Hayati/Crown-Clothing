import {
  applyMiddleware,
  createStore,
  Store,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";
import { IUserState } from "../types/userTypes";
import { ICartState } from "../types/cartTypes";
import { IDirectoryState } from "../types/directoryTypes";
import { IShopState } from "../types/shopTypes";

export interface IApplicationState {
  user: IUserState;
  cart: ICartState;
  directory: IDirectoryState;
  shop: IShopState;
}

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

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
