export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
}

export interface ICartToggleHidden {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

export type CartActions = ICartToggleHidden;

export interface ICartState {
  readonly hidden: boolean;
}
