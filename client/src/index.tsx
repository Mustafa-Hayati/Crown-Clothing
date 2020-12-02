import "./index.css";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import storage, { IApplicationState } from "./Redux/store/store";
import App from "./App";
import { Store } from "redux";

import * as serviceWorker from "./serviceWorker";

interface IProps {
  store: Store<IApplicationState>;
}

const Root: FC<IProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={storage.persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(
  <Root store={storage.store} />,
  document.getElementById("root")
);

serviceWorker.register();
