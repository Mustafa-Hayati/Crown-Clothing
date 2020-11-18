import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/** NOTE
 * This (⬇) is a special syntax in React for importing SVG
 */
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./HeaderStyles";
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
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={onSignOutClick}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="signin">SGIN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
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
