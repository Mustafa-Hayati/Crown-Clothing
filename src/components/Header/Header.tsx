import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
/** NOTE
 * This (⬇) is a special syntax in React for importing SVG
 */
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Showing Sign in and Sign out
import firebase from "firebase";
import { auth } from "../../firebase/firebase.utils";

interface IProps {
  currentUser: firebase.User | null;
}

const Header: React.FC<IProps> = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
