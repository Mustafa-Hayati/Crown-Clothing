import { createSelector } from "reselect";
import { IApplicationState } from "../store/store";

const COLLECTION_ID_MAP: {
  [item: string]: number;
} = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: IApplicationState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], collections =>
    collections.find(
      collection =>
        collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
