import "./CollectionsOverview.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { IApplicationState } from "../../Redux/store/store";
import { selectCollections } from "../../Redux/selectors/shopSelectors";
import { IShopData } from "../../Redux/types/shopTypes";

interface IProps {
  collections: IShopData[];
}

const CollectionsOverview: FC<IProps> = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ title, items, id }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

interface IDesiredSelection {
  collections: IShopData[];
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
