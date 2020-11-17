import "./CollectionsOverview.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { IApplicationState } from "../../Redux/store/store";
import { selectCollections } from "../../Redux/selectors/shopSelectors";
import { IShopData } from "../../Redux/types/shopTypes";

interface IProps {
  collections: IShopData;
}

const CollectionsOverview: FC<IProps> = ({ collections }) => {
  const renderCollections = () => {
    // Because collections is no longer an array
    for (let i in collections) {
      const { id, title, items } = collections[i];

      return (
        <CollectionPreview key={id} title={title} items={items} />
      );
    }
  };

  return (
    <div className="collections-overview">{renderCollections()}</div>
  );
};

interface IDesiredSelection {
  collections: IShopData;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
