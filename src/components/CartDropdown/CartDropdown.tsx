import "./CartDropdown.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { IApplicationState } from "../../Redux/store/store";
import { ICartItem } from "../../Redux/types/cartTypes";
import CartItem from "../CartItem/CartItem";

interface IProps {
  cartItems: ICartItem[];
}

const CartDropdown: FC<IProps> = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = ({
  cart: { cartItems },
}: IApplicationState) => {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
