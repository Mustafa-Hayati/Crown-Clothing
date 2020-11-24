import { ICartItem } from "./cartTypes";

export enum ShopActionTypes {
  FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE",
  UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS",
}

export interface IShopFetchCollectionsSuccess {
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: IShopData;
}

export interface IShopFetchCollectionsStart {
  type: ShopActionTypes.FETCH_COLLECTIONS_START;
}

export interface IShopFetchCollectionsFailure {
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: string;
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

export type ShopActions =
  | IShopFetchCollectionsStart
  | IShopFetchCollectionsSuccess
  | IShopFetchCollectionsFailure;

export interface IShopState {
  collections: IShopData | null;
  isFetching: boolean;
  errorMessage: string;
}
