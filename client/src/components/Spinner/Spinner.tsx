import React, { FC } from "react";

import { SpinnerContainer, SpinnerOverlay } from "./SpinnerStyles";

const Spinner: FC = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
