import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
/** NOTE
 * This (⬇) is a special syntax in React for importing SVG
 */
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header: React.FC = () => {
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
      </div>
    </div>
  );
};

export default Header;
