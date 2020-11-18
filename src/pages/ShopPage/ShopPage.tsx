import React, { useEffect } from "react";
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

interface IProps extends RouteComponentProps {
  updateCollections: typeof updateCollections;
}

const ShopPage: React.FC<IProps> = ({ match, updateCollections }) => {
  useEffect(() => {
    let unsubscribeFromSnapshot: any = null;

    const collectionRef = firestore.collection(`collections`);
    unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(
          snapshot
        );
        updateCollections(collectionsMap);
      }
    );

    return () => {
      unsubscribeFromSnapshot();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const mapDispatchToProps = (
  dispatch: Dispatch<IShopUpdateCollections>
) => ({
  updateCollections: (collectionsMap: IShopData) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
