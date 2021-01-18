import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

const FoodItem: AnyStyledComponent = styled.div`
  width: 22rem;
  padding: 0.5rem 1rem;
  margin: 20px 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background-color: ${(props: { name: string }): string =>
    props.name === '' ? 'none' : '#f36523'};

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
`

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
`

interface MenuItemProps {
  name: string
  price?: string
  desc?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  desc,
  price,
}): JSX.Element => {
  return (
    <FoodItem name={name}>
      <FoodItemDesc>
        <h1>{name}</h1>
        {desc ? <p>{desc}</p> : null}
      </FoodItemDesc>
      {price ? <h1>{price}</h1> : null}
    </FoodItem>
  )
}

export { MenuItem }
