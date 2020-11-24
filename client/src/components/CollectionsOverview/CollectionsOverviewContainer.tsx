import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../Redux/selectors/shopSelectors";
import { IApplicationState } from "../../Redux/store/store";
import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";

interface IDesiredSelection {
  isLoading: boolean;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  isLoading: selectIsCollectionFetching,
});

// Compose arguments from right to left;
const CollectionsOverviewContainer = compose<
  typeof CollectionsOverview
>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
