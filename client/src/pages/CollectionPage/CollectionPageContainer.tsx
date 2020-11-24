import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { selectIsCollectionLoaded } from "../../Redux/selectors/shopSelectors";
import { IApplicationState } from "../../Redux/store/store";
import CollectionPage from "./CollectionPage";

interface IDesiredSelection {
  isLoading: boolean;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  isLoading: state => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose<typeof CollectionPage>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
