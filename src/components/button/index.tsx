import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle = styled.div`
  border: solid #fff;
  border-radius: 20px;
`;

const Text = styled.div`
  font-size: 16px;
`;

type TextType = {
  text: string;
};

const Button: React.FC<TextType> = (props): JSX.Element => {
  const { text } = props;

  return (
    <ButtonStyle>
      <Text>{text}</Text>
    </ButtonStyle>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export { Button };
