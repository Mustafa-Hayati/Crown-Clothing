import "./CustomButton.scss";
import React from "react";

interface IProps {
  isGoogleSignIn?: boolean;
  onClick?: Function;
}

const CustomButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & IProps
> = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
