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
  const hoursInfo = [
    "Mon - Thur | 10:30 - 10:00",
    "Fri - Sat | 10:30 - 10:30",
    "Sunday | 11:30 - 10:00"
  ];

  const locationInfo = [
    "471 Lafayette Ctr",
    "Manchester, MO 63011",
    "(636) 527 - 9990"
  ];

  return (
    <HomePage>
      <HomeBanner
        image={image}
        text="Delicious and cost effective Japanese cuisine"
      />
      <InfoSection>
        <PageBlockRight title="Hours" info={hoursInfo} imgSource="#" />
        <PageBlockLeft title="Location" info={locationInfo} imgSource="#" />
      </InfoSection>
      <Footer />
    </HomePage>
  );
};

export { Home };
