import "./CheckoutPage.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/selectors/cartSelectors";
import { ICartItem } from "../../Redux/types/cartTypes";
import { IApplicationState } from "../../Redux/store/store";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

interface IProps {
  cartItems: ICartItem[];
  totalPrice: number;
}

const CheckoutPage: FC<IProps> = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

interface IDesiredSelection {
  cartItems: ICartItem[];
  totalPrice: number;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
