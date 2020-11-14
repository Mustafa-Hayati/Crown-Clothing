import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
/** NOTE
 * This (⬇) is a special syntax in React for importing SVG
 */
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Showing Sign in and Sign out
// import firebase from "firebase";
import { auth } from "../../firebase/firebase.utils";
import { IUser } from "../../Redux/types/userTypes";
import { IApplicationState } from "../../Redux/store/store";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

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

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}: IApplicationState) => {
  return {
    currentUser,
    hidden,
  };
};

export default connect(mapStateToProps)(Header);
