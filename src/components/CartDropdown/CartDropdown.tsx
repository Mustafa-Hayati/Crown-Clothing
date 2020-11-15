import "./CartDropdown.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { IApplicationState } from "../../Redux/store/store";
import { ICartItem } from "../../Redux/types/cartTypes";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Redux/selectors/cartSelectors";
import { createStructuredSelector } from "reselect";

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

interface IDesiredSelection {
  cartItems: ICartItem[];
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
