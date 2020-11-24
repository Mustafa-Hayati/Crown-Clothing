import React from "react";
import { HomePageContainer } from "./HomePageStyles";
import Directory from "../../components/Directory/Directory";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
