// import React, { useGlobal } from "reactn";
import React from "react";
import styled from "styled-components";

import image from "../../assets/images/banners/front_banner.jpg";

import { HomeBanner } from "../banner_home/index";
import { Footer } from "../footer/index";
import { PageBlockLeft } from "../page_block/page_block_left";
import { PageBlockRight } from "../page_block/page_block_right";

const HomePage = styled.main`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = (): JSX.Element => {
  const generalInfo = [
    "We are a small restaurant in Manchester that serves delicious food ranging from a large variety of Sushi to other Japanese dishes like Udon."
  ];

  const locationInfo = [
    "471 Lafayette Ctr",
    "Manchester, MO 63011",
    "(636) 527 - 9990"
  ];

  const hoursInfo = [
    "Here’s when you can come in.",
    "Mon - Thur | 10:30 - 10:00",
    "Fri - Sat | 10:30 - 10:30",
    "Sunday | 11:30 - 10:00"
  ];

  return (
    <HomePage>
      <HomeBanner
        image={image}
        text="Delicious Japanese cuisine in Manchester"
      />
      <InfoSection>
        <PageBlockRight
          title="Welcome to Sushi Ai"
          info={generalInfo}
          imgSource="#"
        />
        <PageBlockLeft title="Where we are" info={locationInfo} imgSource="#" />
        <PageBlockRight
          title="When are we open"
          info={hoursInfo}
          imgSource="#"
        />
      </InfoSection>
      <Footer />
    </HomePage>
  );
};

export { Home };
