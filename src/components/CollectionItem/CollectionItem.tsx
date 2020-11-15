import "./CollectionItem.scss";
import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../Redux/actions/cartActions";
import CustomButton from "../CustomButton/CustomButton";
import { ICartItem } from "../../Redux/types/cartTypes";

interface IProps {
  addItem: typeof addItem;
  item: ICartItem;
}

const CollectionItem: React.FC<IProps> = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (item: ICartItem) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
