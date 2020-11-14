import "./CartIcon.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../Redux/actions/cartActions";

interface IProps {
  toggleCartHidden: typeof toggleCartHidden;
}

const CartIcon: FC<IProps> = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
