import "./CollectionPreview.scss";
import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import { ICartItem } from "../../Redux/types/cartTypes";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IProps extends RouteComponentProps {
  id?: number;
  title: string;
  routeName?: string;
  items: ICartItem[];
}

const CollectionPreview: React.FC<IProps> = ({
  history,
  match,
  title,
  items,
  routeName,
}) => {
  const onTitleClick = () => {
    history.push(`${match.path}/${routeName}`);
  };

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={onTitleClick}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
