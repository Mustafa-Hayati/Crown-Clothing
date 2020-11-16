import "./CheckoutItem.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import {
  ICartAddItem,
  // ICartAddItem,
  ICartClearItem,
  ICartItem,
  ICartRemoveItem,
} from "../../Redux/types/cartTypes";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../Redux/actions/cartActions";
import { Dispatch } from "redux";

interface IProps {
  cartItem: ICartItem;
  clearItem: typeof clearItemFromCart;
  addItem: typeof addItem;
  removeItem: typeof removeItem;
}

const CheckoutItem: FC<IProps> = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
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

const mapDispatchToProps = (
  dispatch: Dispatch<ICartClearItem | ICartAddItem | ICartRemoveItem>
) => {
  return {
    clearItem: (item: ICartItem) => dispatch(clearItemFromCart(item)),
    addItem: (item: ICartItem) => dispatch(addItem(item)),
    removeItem: (item: ICartItem) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
