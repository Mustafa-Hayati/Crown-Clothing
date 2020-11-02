import "./CollectionPreview.scss";
import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

interface IProps {
  id?: number;
  title: string;
  routeName?: string;
  items: Item[];
}

export interface Item {
  id?: number;
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionPreview: React.FC<IProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
