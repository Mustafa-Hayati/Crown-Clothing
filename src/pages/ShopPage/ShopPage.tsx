import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { selectCollections } from "../../Redux/selectors/shopSelectors";
import { IApplicationState } from "../../Redux/store/store";
import { IShopData } from "../../Redux/types/shopTypes";

interface IProps {
  collections: IShopData[];
}

const ShopPage: React.FC<IProps> = ({ collections }) => {
  return (
    <div className="shop-page">
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

export default connect(mapStateToProps)(ShopPage);
