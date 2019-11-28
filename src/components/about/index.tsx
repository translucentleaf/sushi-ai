import React from "react";
import styled from "styled-components";
import aboutBanner from "../../assets/images/banners/about_banner.jpg";
import { Banner } from "../banner/index";

const About = styled.main`
  color: #fff;
`;

const AboutPage: React.FC = (): JSX.Element => {
  return (
    <About>
      <Banner
        image={aboutBanner}
        text="ABOUT US"
        height="350px"
        position="center"
      />
    </About>
  );
};

export { AboutPage };
