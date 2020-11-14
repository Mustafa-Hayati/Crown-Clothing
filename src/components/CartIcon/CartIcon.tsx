import "./CartIcon.scss";
import React, { FC } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon: FC = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
