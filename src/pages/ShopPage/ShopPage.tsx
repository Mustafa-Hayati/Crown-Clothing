import React, { useEffect, useState } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { Dispatch } from "redux";
import {
  IShopData,
  IShopUpdateCollections,
} from "../../Redux/types/shopTypes";
import { updateCollections } from "../../Redux/actions/shopActions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

interface IProps extends RouteComponentProps {
  updateCollections: typeof updateCollections;
}

const CollectionOverviewWithSpinner = WithSpinner(
  CollectionsOverview
);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage: React.FC<IProps> = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection(`collections`);

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(
        snapshot
      );
      updateCollections(collectionsMap);
      setLoading(false);
    });
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
            isLoading={loading}
            {...props}
          />
        )}
      />

      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={loading}
            {...props}
            // inital Collection is null
            collection={null}
          />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<IShopUpdateCollections>
) => ({
  updateCollections: (collectionsMap: IShopData) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
