import React, { ComponentType, FC } from "react";

import {
  SpinnerContainer,
  SpinnerOverlay,
} from "./WithSpinnerStyles";

interface ILoadingProps {
  isLoading: boolean;
}

const WithSpinner = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P & ILoadingProps> => ({
  isLoading,
  ...otherProps
}: ILoadingProps) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...(otherProps as P)} />
  );

export default WithSpinner;
