import { ActionCreator /* , AnyAction, Dispatch */ } from "redux";

import {
  CartActionTypes,
  ICartAddItem,
  ICartItem,
  ICartToggleHidden,
} from "../types/cartTypes";

export const toggleCartHidden: ActionCreator<ICartToggleHidden> = (): ICartToggleHidden => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem: ActionCreator<ICartAddItem> = (
  item: ICartItem
): ICartAddItem => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
