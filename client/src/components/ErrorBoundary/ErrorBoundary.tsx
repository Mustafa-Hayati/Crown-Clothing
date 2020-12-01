import React, { Component, ErrorInfo, ReactNode } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./ErrorBoundaryStyles";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): IState {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
          <ErrorImageText>
            Sorry, Something went wrong. Could not load this page
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
