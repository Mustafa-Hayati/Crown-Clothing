import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import {
  googleSignInFailure,
  googleSignInSuccess,
} from "../actions/userActions";
import { UserActionTypes } from "../types/userTypes";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log("function*signInWithGoogle -> user", user);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...user,
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  );
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
