import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./HeaderStyles";
/** NOTE
 * This (⬇) is a special syntax in React for importing SVG
 */
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  IUser,
  IUserSignOutStart,
} from "../../Redux/types/userTypes";
import { IApplicationState } from "../../Redux/store/store";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../Redux/selectors/userSelectors";
import { selectCartHidden } from "../../Redux/selectors/cartSelectors";

import { Dispatch } from "redux";
import { signOutStart } from "../../Redux/actions/userActions";

interface IProps {
  currentUser: IUser | null;
  hidden: boolean;
  signOutStart: typeof signOutStart;
}

const Header: FC<IProps> = ({
  currentUser,
  hidden,
  signOutStart,
}) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
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

const mapDispatchToProps = (
  dispatch: Dispatch<IUserSignOutStart>
) => {
  return {
    signOutStart: () => dispatch(signOutStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
