import { takeEvery } from "redux-saga/effects";
import { ShopActionTypes } from "../types/shopTypes";

export function* fetchCollectionsAsync() {
  yield console.log("I'm fired");
}

// Saga
export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
