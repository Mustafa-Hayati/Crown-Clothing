import { Reducer } from "redux";

import {
  ICartState,
  CartActions,
  CartActionTypes,
} from "../types/cartTypes";

const initialCartState: ICartState = {
  hidden: true,
};

export const cartReducer: Reducer<ICartState, CartActions> = (
  state = initialCartState,
  action
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};
