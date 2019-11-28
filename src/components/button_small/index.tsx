import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  border: solid #ffffff;
  border-radius: 15px;
  color: #ffffff;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.a`
  color: #ffffff;
  font-size: 18px;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
`;

type ButtonTypes = {
  text: string;
  fontSize: string;
};

const ButtonSmall: React.FC<ButtonTypes> = (props): JSX.Element => {
  const { text } = props;

  return (
    <ButtonStyle>
      <Text href="#">{text}</Text>
    </ButtonStyle>
  );
};

export { ButtonSmall };
