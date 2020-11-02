import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SingInAndSignUp";

// firebase and authentication
// import firebase from "firebase";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

// TODO: define the type of currentUser
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IProps {
  id: string;
  displayName: string;
  email: string;
  createdAt: Date;
}

const App = () => {
  // FIXME fix the any type of the current user.
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  // const theUser = useRef(currentUser);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef?.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          // set user to null
          setCurrentUser(userAuth);
        }
      }
    );

    return () => {
      console.log("App will unmount");
      unsubscribeFromAuth();
    };
  }, []);

  // TODO: delete this after finishing the app
  useEffect(() => console.log(currentUser), [currentUser]);

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
