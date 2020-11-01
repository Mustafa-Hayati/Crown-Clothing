import "./CustomButton.scss";
import React from "react";

interface Props {
  [key: string]: string;
}

const CustomButton: React.FC<Props> = ({
  children,
  ...otherProps
}) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
