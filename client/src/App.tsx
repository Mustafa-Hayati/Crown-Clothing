import "./App.css";
import React, { /* useState, */ FC, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SingInAndSignUp";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import {
  IUser,
  IUserCheckUserSession,
} from "./Redux/types/userTypes";
import { IApplicationState } from "./Redux/store/store";
import { selectCurrentUser } from "./Redux/selectors/userSelectors";
import { Dispatch } from "redux";
import { checkUserSession } from "./Redux/actions/userActions";

interface IProps {
  currentUser: IUser | null;
  checkUserSession: typeof checkUserSession;
}

const App: FC<IProps> = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

interface IDesiredSelection {
  currentUser: IUser | null;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (
  dispatch: Dispatch<IUserCheckUserSession>
) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
