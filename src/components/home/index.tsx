// import React, { useGlobal } from "reactn";
import React from "react";
import styled from "styled-components";
import { HomeBanner } from "../banner_home/index";
import { Footer } from "../footer/index";
import { PageBlock } from "../page_block/index";
import image from "../../assets/images/banners/front_banner.jpg";

const HomePage = styled.main`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

/*
  TODO: Uncomment when implementing light/dark mode on website.

type ThemeTypes = {
  theme: string;
};

  const theme = useGlobal<ThemeTypes>("theme");

  const Main = styled.main`
    background-color: ${theme ? "#fff" : "#2c271d"};
    color: #fff;
    margin: 0;
    min-height: 100vh;
  `;
*/
const Home: React.FC = (): JSX.Element => {
  const hoursInfo = ["1", "2", "3"];

  return (
    <HomePage>
      <HomeBanner
        image={image}
        text="Delicious and cost effective Japanese cuisine"
      />
      <PageBlock title="Hours" info={hoursInfo} imgSource="#" />
      <Footer />
    </HomePage>
  );
};

export { Home };
