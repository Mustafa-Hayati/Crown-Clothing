import { createSelector } from "reselect";
import { IApplicationState } from "../store/store";
import { ICartItem, ICartState } from "../types/cartTypes";

// We can create 2 types of selectors:
// 1) input selectors: that doesn't use createSelector
// 2) ouput selector: which does use createSelector

/* NOTE
 * input selector: it's a function which takes the
 * the whole state and returns only a part of it.
 */
const selectCart = (state: IApplicationState): ICartState =>
  state.cart;

/* NOTE
 * output selector: it's a function taking three args.
 * 1) An array of selectors: [selectCart, selectUser].
 * You can also pass them one by one too, but arrays are
 * more elegant.
 * 2) A function as combiner, which takes the result
 * of the selecots: (cart, user) => ({user, cart}).
 *
 * Because we are using createSelector function, now
 * selectCartItems is a memoized selector.
 */
export const selectCartItems = createSelector<
  IApplicationState,
  ICartState,
  ICartItem[]
>([selectCart], cart => cart.cartItems);

export const selectCartItemsCount = createSelector<
  IApplicationState,
  ICartItem[],
  number
>([selectCartItems], cartItems =>
  cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0)
);

export const selectCartHidden = createSelector<
  IApplicationState,
  ICartState,
  boolean
>([selectCart], cart => cart.hidden);
