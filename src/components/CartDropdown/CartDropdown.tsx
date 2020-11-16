import "./CartDropdown.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { IApplicationState } from "../../Redux/store/store";
import { ICartItem } from "../../Redux/types/cartTypes";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Redux/selectors/cartSelectors";
import { createStructuredSelector } from "reselect";

interface IProps extends RouteComponentProps {
  cartItems: ICartItem[];
}

const CartDropdown: FC<IProps> = ({ cartItems, history }) => {
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
      <CustomButton onClick={() => history.push("/checkout")}>
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

export default withRouter(connect(mapStateToProps)(CartDropdown));
