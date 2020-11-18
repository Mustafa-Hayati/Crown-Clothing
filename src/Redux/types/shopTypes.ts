import { ICartItem } from "./cartTypes";

export enum ShopActionTypes {
  UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS",
}

export interface IShopUpdateCollections {
  type: ShopActionTypes.UPDATE_COLLECTIONS;
  payload: IShopData;
}

export interface IDataModel {
  id: number;
  title: string;
  routeName: string;
  items: ICartItem[];
}

export interface IShopData {
  [item: string]: IDataModel;
}

export interface IShopState {
  collections: IShopData;
}
