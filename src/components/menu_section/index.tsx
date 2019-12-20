import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { SectionTitle } from "../menu_section_title/index";

const Divider: AnyStyledComponent = styled.hr`
  margin: 20px 20px 0 20px;
  width: 100%;
`;

const ItemGroupWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const FoodItem: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 20px 20px;
  min-width: 450px;

  h1 {
    font-size: 24px;
    font-weight: normal;
  }

  p {
    font-size: 16px;
  }
`;

const FoodNameDesc: AnyStyledComponent = styled.div`
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

interface ItemGroupProps {
  menuArray: Array<MenuItem>;
}

interface MenuItem {
  name: string;
  price: number;
  desc: string;
}

const ItemGroup: React.FC<ItemGroupProps> = props => {
  const { menuArray } = props;

  const menuItems = menuArray.map((element: MenuItem) => {
    return (
      <FoodItem>
        <FoodNameDesc>
          <h1>{element.name}</h1>
          <p>{element.desc}</p>
        </FoodNameDesc>
        <h1>{element.price}</h1>
      </FoodItem>
    );
  });

  return <ItemGroupWrapper>{menuItems}</ItemGroupWrapper>;
};

const MenuSectionWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 0;
  min-width: 280px;
  max-width: 1080px;
`;

interface MenuSectionProps {
  sectionTitle: string;
  sectionDesc: string;
  sectionPrice: string;
  menuJSON: Array<MenuItem>;
}

const MenuSection: React.FC<MenuSectionProps> = props => {
  const { sectionTitle, sectionDesc, sectionPrice, menuJSON } = props;

  return (
    <MenuSectionWrapper>
      <SectionTitle
        title={sectionTitle}
        desc={sectionDesc}
        price={sectionPrice}
      />
      <Divider />
      <ItemGroup menuArray={menuJSON} />
    </MenuSectionWrapper>
  );
};

export { MenuSection };
