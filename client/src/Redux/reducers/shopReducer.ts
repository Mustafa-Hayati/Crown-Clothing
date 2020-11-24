import { Reducer } from "redux";
import {
  IShopState,
  ShopActions,
  ShopActionTypes,
} from "../types/shopTypes";

const initialShopState: IShopState = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

export const shopReducer: Reducer<IShopState, ShopActions> = (
  state = initialShopState,
  action
) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
