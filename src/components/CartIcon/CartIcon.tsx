import "./CartIcon.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../Redux/actions/cartActions";
import { IApplicationState } from "../../Redux/store/store";

interface IProps {
  toggleCartHidden: typeof toggleCartHidden;
  itemCount: number;
}

const CartIcon: FC<IProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = ({
  cart: { cartItems },
}: IApplicationState) => ({
  itemCount: cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity;
  }, 0),
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
