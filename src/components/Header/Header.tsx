import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/** NOTE
 * This (⬇) is a special syntax in React for importing SVG
 */
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { IUser } from "../../Redux/types/userTypes";
import { IApplicationState } from "../../Redux/store/store";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../Redux/selectors/userSelectors";
import { selectCartHidden } from "../../Redux/selectors/cartSelectors";

// Showing Sign in and Sign out
// import firebase from "firebase";
import { auth } from "../../firebase/firebase.utils";

interface IProps {
  currentUser: IUser | null;
  hidden: boolean;
}

const Header: React.FC<IProps> = ({ currentUser, hidden }) => {
  const onSignOutClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div onClick={onSignOutClick} className="option">
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="signin">
            SGIN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

// NOTE You could use IProps in this case;
interface IDesiredSelection {
  currentUser: IUser | null;
  hidden: boolean;
}

const mapStateToProps = createStructuredSelector<
  IApplicationState,
  IDesiredSelection
>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
