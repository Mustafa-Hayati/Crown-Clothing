import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  IShopData,
  IShopFetchCollectionsFailure,
  IShopFetchCollectionsStart,
  IShopFetchCollectionsSuccess,
  IShopState,
  ShopActions,
  ShopActionTypes,
} from "../types/shopTypes";

export const fetchCollectionsStart: ActionCreator<IShopFetchCollectionsStart> = (): IShopFetchCollectionsStart => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess: ActionCreator<IShopFetchCollectionsSuccess> = (
  collectionsMap: IShopData
): IShopFetchCollectionsSuccess => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure: ActionCreator<IShopFetchCollectionsFailure> = (
  errorMessage: string
): IShopFetchCollectionsFailure => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

/* NOTE
 * If redux-thunk middleware is enabled, any time you attempt
 * to dispatch a function instead of an object, the middleware
 * will call that function with dispatch method itself as the
 * first argument.
 */

export const fetchCollectionsStartAsync: ActionCreator<ThunkAction<
  void,
  IShopState,
  null,
  ShopActions
>> = () => {
  return (dispatch: Dispatch) => {
    const collectionRef = firestore.collection(`collections`);
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(
          snapshot
        );
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error =>
        dispatch(fetchCollectionsFailure(error.messages))
      );
  };
};
