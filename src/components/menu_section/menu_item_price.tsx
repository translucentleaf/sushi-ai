import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const FoodItem: AnyStyledComponent = styled.div`
  width: 22rem;
  padding: 0.5rem 1rem;
  margin: 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background-color: ${(props: { name: string }): string =>
      props.name === "" ? "none" : "#72813a"}
    h1 {
    font-size: 22px;
    font-weight: normal;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    width: 15rem;
  }

  @media (max-width: 700px) {
    align-items: flex-start;

    width: 70vw;
    margin: 0.75rem 0;

    p {
      text-align: left;
    }
  }
`;

const FoodItemDesc: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;
  width: 350px;

  h1 {
    margin: 0;
  }

  p {
    margin: 3px 0 0 0;
  }
`;

interface MenuItemProps {
  name: string;
  price: string;
  desc: string;
}

const MenuItemPrice: React.FC<MenuItemProps> = (props): JSX.Element => {
  const { name, price, desc } = props;

  return (
    <FoodItem name={name}>
      <FoodItemDesc>
        <h1>{name}</h1>
        <p>{desc}</p>
      </FoodItemDesc>
      <h1>{price}</h1>
    </FoodItem>
  );
};

export { MenuItemPrice };
