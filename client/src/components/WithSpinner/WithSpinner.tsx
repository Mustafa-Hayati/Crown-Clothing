import React, { ComponentType, FC } from "react";
import Spinner from "../Spinner/Spinner";

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
    <Spinner />
  ) : (
    <WrappedComponent {...(otherProps as P)} />
  );

export default WithSpinner;
