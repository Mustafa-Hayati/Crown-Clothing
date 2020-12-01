/*
 * TODO: remove eslint disable comments and use the
 * dependncies
 */
import React, {
  /* useState, */ FC,
  useEffect,
  lazy,
  Suspense,
} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "./components/Header/Header";
import {
  IUser,
  IUserCheckUserSession,
} from "./Redux/types/userTypes";
import { IApplicationState } from "./Redux/store/store";
import { selectCurrentUser } from "./Redux/selectors/userSelectors";
import { Dispatch } from "redux";
import { checkUserSession } from "./Redux/actions/userActions";
import { GlobalStyle } from "./globalStyles";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import HomePage from "./pages/HomePage/HomePage";
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const SignInAndSignUp = lazy(
  () => import("./pages/SignInAndSignUp/SingInAndSignUp")
);
const CheckoutPage = lazy(
  () => import("./pages/CheckoutPage/CheckoutPage")
);

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
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
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
