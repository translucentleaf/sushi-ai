import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import dinnerMenu from "../../assets/menus/dinner_special.json";
import { SectionTitle } from "../menu_section_title/index";

const Divider: AnyStyledComponent = styled.hr`
  margin: 20px 20px 0 20px;
  width: 100%;
`;

const ItemGroupWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FoodItem: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 40px 20px 40px;

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

// TODO: Make menu_items based on prop instead of direct import
const ItemGroup: React.FC = () => {
  const menuItems = dinnerMenu.map(element => {
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
}

const MenuSection: React.FC<MenuSectionProps> = props => {
  const { sectionTitle, sectionDesc, sectionPrice } = props;

  return (
    <MenuSectionWrapper>
      <SectionTitle
        title={sectionTitle}
        desc={sectionDesc}
        price={sectionPrice}
      />
      <Divider />
      <ItemGroup />
    </MenuSectionWrapper>
  );
};

export { MenuSection };
