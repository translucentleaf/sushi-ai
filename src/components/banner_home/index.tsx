import React from "react";
import styled from "styled-components";
import { ButtonLarge } from "../button_large/index";

type BannerProps = {
  image: string;
  text: string;
};

const HomeBanner: React.FC<BannerProps> = (props): JSX.Element => {
  const { image, text } = props;

  const BannerBox = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${image});
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
    width: 100%;

    @media (max-width: 700px) {
      height: 100vh;
    }
  `;

  const BannerText = styled.h1`
    font-size: 48px;
    font-weight: normal;
    max-width: 612px;
    text-align: center;

    @media (max-width: 700px) {
      font-size: 36px;
      max-width: 250px;
    }
  `;

  const Buttons = styled.div`
    display: flex;

    div {
      margin: 0 40px 0 40px;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: 110px;
    }
  `;

  return (
    <BannerBox>
      <BannerText>{text}</BannerText>
      <Buttons>
        <ButtonLarge text="Menu" link="/menu" />
        <ButtonLarge text="Find Us" link="/find-us" />
      </Buttons>
    </BannerBox>
  );
};

export { HomeBanner };
