import "./CollectionPage.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectCollection } from "../../Redux/selectors/shopSelectors";
import { IApplicationState } from "../../Redux/store/store";
import { IDataModel } from "../../Redux/types/shopTypes";

interface IProps
  extends RouteComponentProps<{
    collectionId: string;
  }> {
  collection: IDataModel | null;
}

const CollectionPage: FC<IProps> = ({ collection }) => {
  if (!collection) {
    return <Redirect to="/shop" />;
  }

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: IApplicationState,
  ownProps: IProps
) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);
