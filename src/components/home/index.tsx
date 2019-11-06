import React from "react";
import styled from "styled-components";
import { Banner } from "../banner/index";
import image from "../../assets/front_banner.jpg";

const HomePage = styled.main`
  color: #fff;
  display: flex;
  justify-content: center;
  height: 150vh;
`;

const Home: React.FC = (): JSX.Element => {
  return (
    <HomePage>
      <Banner
        image={image}
        text="Delicious and cost effective Japanese cuisine"
      />
    </HomePage>
  );
};

export { Home };
