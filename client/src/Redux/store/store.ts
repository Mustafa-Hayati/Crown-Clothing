import {
  applyMiddleware,
  createStore,
  Store,
  Middleware,
} from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";
import { IUserState } from "../types/userTypes";
import { ICartState } from "../types/cartTypes";
import { IDirectoryState } from "../types/directoryTypes";
import { IShopState } from "../types/shopTypes";
import rootSaga from "../saga/rootSaga";

export interface IApplicationState {
  user: IUserState;
  cart: ICartState;
  directory: IDirectoryState;
  shop: IShopState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store: Store<IApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const storage = {
  persistor,
  store,
};

export default storage;
