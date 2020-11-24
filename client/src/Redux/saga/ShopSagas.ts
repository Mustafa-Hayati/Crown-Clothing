import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "../actions/shopActions";
import { IShopData, ShopActionTypes } from "../types/shopTypes";

/* NOTE
 * put is like the saga effect for creating acctions
 * , like dispatch
 */

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection(`collections`);
    const snapShot = yield collectionRef.get();
    const collectionsMap: IShopData = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

// Saga
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

/* NOTE
 * We add the fetchCollectionsStart (redux-saga) generator
 * function to store e.g:
 * (sagaMiddleware.run(fetchCollectionsStart)).
 * This generator will be called whenever an action object
 * with the type of ShopActionTypes.FETCH_COLLECTIONS_START
 * fires. Then this will invoke the fetchCollectionsAsync
 * generator. We do the normal data fetching from the api,
 * but instead of then-catch or async await we yield the
 * results to varialbes. Then instead of dispatching an
 * action we use put (provided by saga) function to dispatch
 * the actions.
 *
 * Saga allows us to listen for a specific type of action.
 * Saga runs after the reducer, but we usually remove any
 * kind of cases that are handled in saga, from reducers.
 */
