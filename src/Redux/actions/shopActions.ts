import { ActionCreator } from "redux";
import {
  IShopData,
  IShopUpdateCollections,
  ShopActionTypes,
} from "../types/shopTypes";

export const updateCollections: ActionCreator<IShopUpdateCollections> = (
  collectionsMap: IShopData
): IShopUpdateCollections => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
