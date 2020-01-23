import React from "react";
import styled from "styled-components";

import entrance from "../../assets/images/misc/entrance.jpg";
import image from "../../assets/images/banners/front_banner.jpg";
import redSushi from "../../assets/images/misc/sushi_red.jpg";
import vase from "../../assets/images/misc/vase.jpg";

import { HomeBanner } from "../banner_home/index";
import { Footer } from "../footer/index";
import { PageBlock } from "../page_block/index";

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
        <PageBlock
          title="Welcome to Sushi Ai"
          info={generalInfo}
          imgSource={redSushi}
          right
          otherColor={false}
        />
        <PageBlock
          title="Where we are"
          info={locationInfo}
          imgSource={entrance}
          right={false}
          otherColor
        />
        <PageBlock
          title="When are we open"
          info={hoursInfo}
          imgSource={vase}
          right
          otherColor={false}
        />
      </InfoSection>
      <Footer />
    </HomePage>
  );
};

export { Home };
