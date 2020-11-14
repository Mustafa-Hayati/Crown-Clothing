import "./CustomButton.scss";
import React, { ButtonHTMLAttributes, FC } from "react";

interface IProps {
  isGoogleSignIn?: boolean;
  onClick?: Function;
  inverted?: boolean;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & IProps;

const CustomButton: FC<Props> = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.defaultProps = {
  inverted: false,
};

export default CustomButton;
