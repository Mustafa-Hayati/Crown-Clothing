import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SingInAndSignUp";

// firebase and authentication
import firebase from "firebase";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

const App = () => {
  const [
    currentUser,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setCurrentUser,
  ] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async user => {
        await createUserProfileDocument(user);
      }
    );

    return () => {
      console.log("App will unmount");
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
