import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        // match.path = /shop
        path={`${match.path}`}
        component={CollectionsOverview}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
