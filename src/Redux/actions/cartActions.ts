import { ActionCreator /* , AnyAction, Dispatch */ } from "redux";

import {
  CartActionTypes,
  ICartToggleHidden,
} from "../types/cartTypes";

export const toggleCartHidden: ActionCreator<ICartToggleHidden> = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
