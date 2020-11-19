import React, { useEffect } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../Redux/actions/shopActions";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

interface IProps extends RouteComponentProps {
  fetchCollectionsStartAsync: typeof fetchCollectionsStartAsync;
}

const ShopPage: React.FC<IProps> = ({
  match,
  fetchCollectionsStartAsync,
}) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
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

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStartAsync: () =>
    dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
