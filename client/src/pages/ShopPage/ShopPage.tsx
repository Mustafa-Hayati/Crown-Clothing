import React, { FC, useEffect, lazy, Suspense } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../Redux/actions/shopActions";
import { Dispatch } from "redux";
import { IShopFetchCollectionsStart } from "../../Redux/types/shopTypes";
import Spinner from "../../components/Spinner/Spinner";

const CollectionsOverviewContainer = lazy(
  () =>
    import(
      "../../components/CollectionsOverview/CollectionsOverviewContainer"
    )
);

const CollectionPageContainer = lazy(
  () => import("../CollectionPage/CollectionPageContainer")
);

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
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<IShopFetchCollectionsStart>
) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
