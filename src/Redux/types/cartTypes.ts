export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
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

export interface ICartRemoveItem {
  type: CartActionTypes.REMOVE_ITEM;
  payload: ICartItem;
}

export interface ICartClearItem {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: ICartItem;
}

export interface ICartClearCart {
  type: CartActionTypes.CLEAR_CART;
}

export type CartActions =
  | ICartToggleHidden
  | ICartAddItem
  | ICartRemoveItem
  | ICartClearItem
  | ICartClearCart;

export interface ICartState {
  readonly hidden: boolean;
  readonly cartItems: ICartItem[];
}
