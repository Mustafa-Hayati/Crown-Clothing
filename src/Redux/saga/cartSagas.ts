import { takeLatest, call, all, put } from "redux-saga/effects";
import { clearCart } from "../actions/cartActions";
import { UserActionTypes } from "../types/userTypes";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_SUCCESS,
    clearCartOnSignOut
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

/* NOTE
 * Sagas are (kind of) like event listeners.
 * some type of action occurs, we dispatch the action object,
 * saga hears it and does the necessary work, and reducer (if
 * it's necessary), updates the state.

*/
