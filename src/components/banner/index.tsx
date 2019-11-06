import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

type BannerProps = {
  image: string;
  text: string;
};

const Banner: React.FC<BannerProps> = (props): JSX.Element => {
  const { image, text } = props;

  const BannerBox = styled.div`
    background: url(${image});
    background-size: cover;
    color: #fff;
    display: flex;
    height: 800px;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const BannerText = styled.h1`
    font-size: 36px;
  `;

  return (
    <BannerBox>
      <BannerText>{text}</BannerText>
    </BannerBox>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export { Banner };
