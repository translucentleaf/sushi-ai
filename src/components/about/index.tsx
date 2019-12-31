import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import aboutBanner from "../../assets/images/banners/about_banner.jpg";
import aboutPhotoOne from "../../assets/images/showcase/overview.jpg";
import aboutPhotoTwo from "../../assets/images/showcase/wall.jpg";
import aboutPhotoThree from "../../assets/images/showcase/inside_front.jpg";
import aboutPhotoFour from "../../assets/images/showcase/inside_back.jpg";
import aboutPhotoFive from "../../assets/images/showcase/window_section.jpg";
import aboutPhotoSix from "../../assets/images/showcase/bar.jpg";

import { Banner } from "../banner/index";
import { Footer } from "../footer/index";

const About: AnyStyledComponent = styled.main`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutContent: AnyStyledComponent = styled.div`
  font-size: 18px;
  margin-top: 30px;
  max-width: 800px;

  p {
    margin: 30px 0;
  }

  @media (max-width: 1000px) {
    max-width: 400px;
  }

  @media (max-width: 700px) {
    max-width: 90vw;

    p {
      margin: 30px 0;
    }
  }
`;

const Image: AnyStyledComponent = styled.img`
  border-radius: 5px;
  margin: 60px 0;
  width: 100%;

  @media (max-width: 700px) {
    margin: 30px 0;
  }
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
      <AboutContent>
        <p>
          Sushi Ai Manchester is a local restaurant located in Ballwin Missouri
          at the Lafayette Center plaza.
        </p>
        <p>
          We serve Japanese cuisine from sushi rolls to hibachi entrees and
          more. You can either dine in, order carry out, or even order delivery
          through one of our delivery partners.
        </p>
        <p>
          The restaurant recently went through a remodel as you can see from the
          pictures below and come in and enjoy the new experience!
        </p>
        <Image src={aboutPhotoOne} alt="Picture of Sushi Ai restaurant" />
        <Image src={aboutPhotoTwo} alt="Picture of Sushi Ai restaurant" />
        <Image src={aboutPhotoThree} alt="Picture of Sushi Ai restaurant" />
        <Image src={aboutPhotoFour} alt="Picture of Sushi Ai restaurant" />
        <Image src={aboutPhotoFive} alt="Picture of Sushi Ai restaurant" />
        <Image src={aboutPhotoSix} alt="Picture of Sushi Ai restaurant" />
      </AboutContent>
      <Footer />
    </About>
  );
};

export { AboutPage };
