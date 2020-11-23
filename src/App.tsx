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
import { IUser } from "./Redux/types/userTypes";

// firebase and authentication
// import firebase from "firebase";

import { IApplicationState } from "./Redux/store/store";
import { selectCurrentUser } from "./Redux/selectors/userSelectors";

interface IProps {
  currentUser: IUser | null;
}

const App: FC<IProps> = ({ currentUser }) => {
  useEffect(() => {
    // const unsubscribeFromAuth = auth.onAuthStateChanged(
    //   async userAuth => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);
    //       userRef?.onSnapshot(snapShot => {
    //         setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data(),
    //         });
    //       });
    //     } else {
    //       // set user to null
    //       setCurrentUser(userAuth);
    //     }
    //   }
    // );
    // return () => {
    //   unsubscribeFromAuth();
    // };
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

export default connect(mapStateToProps)(App);
