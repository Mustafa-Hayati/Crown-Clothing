import "./CartDropdown.scss";
import React, { FC } from "react";
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown: FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
