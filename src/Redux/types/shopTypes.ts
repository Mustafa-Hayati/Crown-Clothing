import { ICartItem } from "./cartTypes";

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
