import { createSelector } from "reselect";
import { IApplicationState } from "../store/store";

const selectShop = (state: IApplicationState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
