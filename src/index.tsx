import "./index.css";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore, {
  IApplicationState,
} from "./Redux/store/store";
import App from "./App";
import { Store } from "redux";

interface IProps {
  store: Store<IApplicationState>;
}

const Root: FC<IProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root")
);
