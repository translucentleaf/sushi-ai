import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle: AnyStyledComponent = styled.div`
  border: solid #ffffff;
  border-radius: 15px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text: AnyStyledComponent = styled.a`
  color: #ffffff;
  font-size: 24px;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
`;

type ButtonTypes = {
  text: string;
  link: string;
};

const ButtonLarge: React.FC<ButtonTypes> = (props): JSX.Element => {
  const { text, link } = props;

  return (
    <ButtonStyle>
      <Text href={link}>{text}</Text>
    </ButtonStyle>
  );
};

ButtonLarge.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export { ButtonLarge };
