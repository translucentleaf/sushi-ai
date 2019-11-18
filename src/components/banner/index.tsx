import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ButtonLarge } from "../button_large/index";

type BannerProps = {
  image: string;
  text: string;
};

const Banner: React.FC<BannerProps> = (props): JSX.Element => {
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
  `;

  const BannerText = styled.h1`
    font-size: 48px;
    font-weight: normal;
    max-width: 612px;
    text-align: center;
  `;

  const Buttons = styled.div`
    display: flex;

    div {
      margin: 0 40px 0 40px;
    }
  `;

  return (
    <BannerBox>
      <BannerText>{text}</BannerText>
      <Buttons>
        <ButtonLarge text="Menu" link="#" />
        <ButtonLarge text="Find Us" link="#" />
      </Buttons>
    </BannerBox>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export { Banner };
