import React from "react";
import styled from "styled-components";

type BannerProps = {
  image: string;
  text: string;
  height: string;
  position: string;
};

const Banner: React.FC<BannerProps> = (props): JSX.Element => {
  const { image, text, height, position } = props;

  const BannerBox = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${image});
    background-size: cover;
    background-position: ${position};
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${height};
    width: 100%;
  `;

  const BannerText = styled.h1`
    font-size: 48px;
    font-weight: normal;
    max-width: 612px;
    text-align: center;

    @media (max-width: 700px) {
      font-size: 36px;
      width: 250px;
    }
  `;

  return (
    <BannerBox>
      <BannerText>{text}</BannerText>
    </BannerBox>
  );
};

export { Banner };
