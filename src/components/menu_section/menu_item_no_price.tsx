import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const FoodItem: AnyStyledComponent = styled.div`
  width: 22rem;
  padding: 0.5rem 1rem;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: ${(props: { name: string }): string =>
    props.name === "" ? "" : "#72813a"};
  border-radius: 5px;

  h1 {
    font-size: 22px;
    font-weight: normal;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: 3px 0 0 0;
    text-align: left;
  }

  @media (max-width: 700px) {
    align-items: flex-start;

    min-width: 0;
    max-width: 80vw;
    margin: 5px 0;

    p {
      text-align: left;
    }
  }
`;

interface MenuItemProps {
  name: string;
  desc: string;
}

const MenuItemNoPrice: React.FC<MenuItemProps> = (props): JSX.Element => {
  const { name, desc } = props;

  return (
    <FoodItem name={name}>
      <h1>{name}</h1>
      <p>{desc}</p>
    </FoodItem>
  );
};

export { MenuItemNoPrice };
