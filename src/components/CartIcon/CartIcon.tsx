import "./CartIcon.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../Redux/actions/cartActions";
import { selectCartItemsCount } from "../../Redux/selectors/cartSelectors";
import { IApplicationState } from "../../Redux/store/store";
import { createStructuredSelector } from "reselect";

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

interface IDesiredSelection {
  itemCount: number;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
