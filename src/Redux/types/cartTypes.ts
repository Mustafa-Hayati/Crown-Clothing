export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
}

export interface ICartToggleHidden {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

export interface ICartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface ICartAddItem {
  type: CartActionTypes.ADD_ITEM;
  payload: ICartItem;
}

export type CartActions = ICartToggleHidden | ICartAddItem;

export interface ICartState {
  readonly hidden: boolean;
  readonly cartItems: ICartItem[];
}
