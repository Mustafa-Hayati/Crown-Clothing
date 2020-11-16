import "./CheckoutItem.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import {
  ICartClearItem,
  ICartItem,
} from "../../Redux/types/cartTypes";
import { clearItemFromCart } from "../../Redux/actions/cartActions";
import { Dispatch } from "redux";

interface IProps {
  cartItem: ICartItem;
  clearItem: typeof clearItemFromCart;
}

const CheckoutItem: FC<IProps> = ({ cartItem, clearItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ICartClearItem>) => {
  return {
    clearItem: (item: ICartItem) => dispatch(clearItemFromCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
