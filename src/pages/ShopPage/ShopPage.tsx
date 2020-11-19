import React, { useEffect } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { IApplicationState } from "../../Redux/store/store";
import { selectIsCollectionFetching } from "../../Redux/selectors/shopSelectors";
import { fetchCollectionsStartAsync } from "../../Redux/actions/shopActions";
import { selectIsCollectionLoaded } from "./../../Redux/selectors/shopSelectors";

interface IProps extends RouteComponentProps {
  isCollectionFetching: boolean;
  fetchCollectionsStartAsync: typeof fetchCollectionsStartAsync;
  isCollectionsLoaded: boolean;
}

const CollectionOverviewWithSpinner = WithSpinner(
  CollectionsOverview
);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage: React.FC<IProps> = ({
  match,
  isCollectionFetching,
  fetchCollectionsStartAsync,
  isCollectionsLoaded,
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
        render={props => (
          <CollectionOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />

      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
            // inital Collection is null
            collection={null}
          />
        )}
      />
    </div>
  );
};

interface IDesiredSelection {
  isCollectionFetching: boolean;
  isCollectionsLoaded: boolean;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStartAsync: () =>
    dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
