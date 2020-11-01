import "./CustomButton.scss";
import React from "react";

interface Props {
  isGoogleSignIn?: boolean;
  onClick?: Function;
}

const CustomButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
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
