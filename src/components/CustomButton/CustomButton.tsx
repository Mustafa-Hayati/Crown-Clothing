import React, { ButtonHTMLAttributes, FC } from "react";
import { CustomButtonContainer } from "./CustonButtonStyles";

interface IProps {
  isGoogleSignIn?: boolean;
  onClick?: Function;
  inverted?: boolean;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & IProps;

const CustomButton: FC<Props> = ({ children, ...props }) => {
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
};

CustomButton.defaultProps = {
  inverted: false,
};

export default CustomButton;
