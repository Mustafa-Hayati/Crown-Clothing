import "./CollectionPreview.scss";
import React from "react";

interface Props {
  id?: number;
  title: string;
  routeName?: string;
  items: Item[];
}

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, name }) => (
            <div key={id}>{name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
