import { Reducer } from "redux";
import { IShopState } from "../types/shopTypes";
import SHOP_DATA from "./../data/ShopData";

const initialShopState: IShopState = {
  collections: SHOP_DATA,
};

export const shopReducer: Reducer<IShopState> = (
  state = initialShopState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
