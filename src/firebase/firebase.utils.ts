import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBpUVV6peoetWbdXwi2HrFvVD2PFYHEHs8",
  authDomain: "crown-clothing-db-b2dc4.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-b2dc4.firebaseio.com",
  projectId: "crown-clothing-db-b2dc4",
  storageBucket: "crown-clothing-db-b2dc4.appspot.com",
  messagingSenderId: "1080715039944",
  appId: "1:1080715039944:web:01091e89ed7745a8fe41fd",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
