import { ActionCreator /* , AnyAction, Dispatch */ } from "redux";

import {
  CartActionTypes,
  ICartAddItem,
  ICartClearCart,
  ICartClearItem,
  ICartItem,
  ICartRemoveItem,
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

export const removeItem: ActionCreator<ICartRemoveItem> = (
  item: ICartItem
): ICartRemoveItem => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart: ActionCreator<ICartClearItem> = (
  item: ICartItem
): ICartClearItem => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart: ActionCreator<ICartClearCart> = () => ({
  type: CartActionTypes.CLEAR_CART,
});
