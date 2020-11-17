import "./CollectionsOverview.scss";
import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { IApplicationState } from "../../Redux/store/store";
import { selectCollectionsForPreview } from "../../Redux/selectors/shopSelectors";
import { IDataModel } from "../../Redux/types/shopTypes";

interface IProps {
  collections: IDataModel[];
}

const CollectionsOverview: FC<IProps> = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(
        ({ id, title, items, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            title={title}
            items={items}
            {...otherCollectionProps}
          />
        )
      )}
    </div>
  );
};

interface IDesiredSelection {
  collections: IDataModel[];
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
