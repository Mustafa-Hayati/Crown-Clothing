import "./CartItem.scss";
import React, { FC, memo } from "react";
import { ICartItem } from "../../Redux/types/cartTypes";

interface IProps {
  item: ICartItem;
}

const CartItem: FC<IProps> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default memo(CartItem);
