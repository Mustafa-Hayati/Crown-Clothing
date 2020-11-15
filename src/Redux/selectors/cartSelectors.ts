import { createSelector } from "reselect";
import { IApplicationState } from "../store/store";
import { ICartItem, ICartState } from "../types/cartTypes";

/* 
function createSelector<S, R1, T>(selector: Selector<S, R1>, combiner: (res: R1) => T): OutputSelector<S, T, (res: R1) => T> (+97 overloads)
*/

// We can create 2 types of selectors:
// 1) input selectors: that doesn't use createSelector
// 2) ouput selector: which does use createSelector

/* NOTE
 * input selector: it's a function which takes the
 * the whole state and returns only a part of it.
 */
const selectCart = (state: IApplicationState): ICartState =>
  state.cart;

// const selectUser = (state: IApplicationState) => state.user;

/* NOTE
 * output selector: it's a function taking three args.
 * 1) An array of selectors: [selectCart, selectUser]
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
