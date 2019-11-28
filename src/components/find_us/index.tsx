import React from "react";
import styled from "styled-components";
import bannerImage from "../../assets/images/banners/find_us_banner.jpg";
import { Banner } from "../banner/index";
import { Map } from "../map/index";

const FindUs = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 80px 0 80px 0;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    text-align: right;
  }
`;

const Text = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin: 0 50px 0 0;
`;

const TextGroup = styled.div``;

const FindUsPage: React.FC = (): JSX.Element => {
  return (
    <FindUs>
      <Banner
        text="Find Us"
        image={bannerImage}
        height="300px"
        position="center top"
      />
      <Content>
        <TextInfo>
          <TextGroup>
            <Text>471 Lafayette Ctr</Text>
            <Text>Manchester, MO 63011</Text>
          </TextGroup>
          <TextGroup>
            <Text>Mon - Thur | 10:30 - 10</Text>
            <Text>Fri - Sat | 10:30 - 11</Text>
            <Text>Sunday | 11:30 - 10</Text>
          </TextGroup>
          <Text>(636) 527-9990</Text>
          <TextGroup>
            <Text>Questions and Concerns</Text>
            <Text>contact@sushiai.com</Text>
          </TextGroup>
        </TextInfo>
        <Map />
      </Content>
      <Text>Millitary and public service members get a discount!</Text>
    </FindUs>
  );
};

export { FindUsPage };
