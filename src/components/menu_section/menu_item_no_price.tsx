import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const FoodItem: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 20px 20px;
  min-width: 450px;

  h1 {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 3px 0 0 0;
    max-width: 350px;
    text-align: center;
  }
`;

interface MenuItemProps {
  name: string;
  desc: string;
}

const MenuItemNoPrice: React.FC<MenuItemProps> = (props): JSX.Element => {
  const { name, desc } = props;

  return (
    <FoodItem>
      <h1>{name}</h1>
      <p>{desc}</p>
    </FoodItem>
  );
};

export { MenuItemNoPrice };
