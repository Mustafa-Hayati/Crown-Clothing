import "./CartDropdown.scss";
import React, { FC } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../CustomButton/CustomButton";
import { IApplicationState } from "../../Redux/store/store";
import {
  ICartItem,
  ICartToggleHidden,
} from "../../Redux/types/cartTypes";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Redux/selectors/cartSelectors";
import { toggleCartHidden } from "../../Redux/actions/cartActions";

interface IProps extends RouteComponentProps {
  cartItems: ICartItem[];
  dispatch: Dispatch<ICartToggleHidden>;
}

const CartDropdown: FC<IProps> = ({
  cartItems,
  history,
  /* NOTE
   * We use dispatch this way to avoid writing
   * mapDispatchToProps. Because the connect function gives
   * us the access to dispatch function
   */
  dispatch,
}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

interface IDesiredSelection {
  cartItems: ICartItem[];
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  cartItems: selectCartItems,
});

/* NOTE
 * The connect function passes the dispatch function to
 * props, if we don't use mapDispatchToProps.
 */

export default withRouter(connect(mapStateToProps)(CartDropdown));
