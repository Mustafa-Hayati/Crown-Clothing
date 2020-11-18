import { Reducer } from "redux";
import { IShopState, ShopActionTypes } from "../types/shopTypes";
import SHOP_DATA from "./../data/ShopData";

const initialShopState: IShopState = {
  collections: SHOP_DATA,
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
