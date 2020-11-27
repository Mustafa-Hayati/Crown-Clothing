import React, { FC, useEffect } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../Redux/actions/shopActions";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";
import { Dispatch } from "redux";
import { IShopFetchCollectionsStart } from "../../Redux/types/shopTypes";

interface IProps extends RouteComponentProps {
  fetchCollectionsStart: typeof fetchCollectionsStart;
}

const ShopPage: FC<IProps> = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        // match.path = /shop
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<IShopFetchCollectionsStart>
) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
