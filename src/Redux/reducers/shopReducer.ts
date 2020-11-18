import { Reducer } from "redux";
import { IShopState, ShopActionTypes } from "../types/shopTypes";

const initialShopState: IShopState = {
  collections: null,
};

export const shopReducer: Reducer<IShopState> = (
  state = initialShopState,
  action
) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};
