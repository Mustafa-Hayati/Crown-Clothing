import { ICartItem } from "./cartTypes";

export interface IShopData {
  id: number;
  title: string;
  routeName: string;
  items: ICartItem[];
}

export interface IShopState {
  collections: IShopData[];
}
