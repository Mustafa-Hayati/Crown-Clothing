export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
  CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",
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

export interface ICartClearItem {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: ICartItem;
}

export type CartActions =
  | ICartToggleHidden
  | ICartAddItem
  | ICartClearItem;

export interface ICartState {
  readonly hidden: boolean;
  readonly cartItems: ICartItem[];
}
