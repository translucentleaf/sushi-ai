import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { MenuItemPrice } from "./menu_item_price";
import { MenuItemNoPrice } from "./menu_item_no_price";
import { SectionTitle } from "../menu_section_title/index";

const Divider: AnyStyledComponent = styled.hr`
  margin: 20px 20px 0 20px;
  width: 100%;

  @media (max-width: 700px) {
    max-width: 80vw;
  }
`;

const ItemGroupWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

interface ItemGroupProps {
  menuArray: Array<MenuItem>;
  priceToggle: boolean;
}

interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

const ItemGroup: React.FC<ItemGroupProps> = props => {
  const { menuArray, priceToggle } = props;

  const menuItems = menuArray.map((element: MenuItem) => {
    return (
      <div>
        {priceToggle ? (
          <MenuItemPrice
            name={element.name}
            price={element.price}
            desc={element.desc}
          />
        ) : (
          <MenuItemNoPrice name={element.name} desc={element.desc} />
        )}
      </div>
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

  @media (max-width: 700px) {
    min-width: 0;
  }
`;

const BackToTop: AnyStyledComponent = styled.a`
  color: #ffffff;
  font-size: 18px;
  text-decoration: underline;
`;

interface MenuSectionProps {
  sectionTitle: string;
  sectionDesc: string;
  sectionPrice: string;
  menuJSON: Array<MenuItem>;
  priceToggle: boolean;
  menuType: string;
}

const MenuSection: React.FC<MenuSectionProps> = props => {
  const {
    sectionTitle,
    sectionDesc,
    sectionPrice,
    menuJSON,
    priceToggle,
    menuType
  } = props;

  return (
    <MenuSectionWrapper>
      <SectionTitle
        title={sectionTitle}
        desc={sectionDesc}
        price={sectionPrice}
      />
      <Divider />
      <ItemGroup menuArray={menuJSON} priceToggle={priceToggle} />
      <BackToTop href={`#${menuType}`}>Back to top</BackToTop>
    </MenuSectionWrapper>
  );
};

export { MenuSection };
