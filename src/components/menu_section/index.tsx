import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { MenuItemPrice } from "./menu_item_price";
import { MenuItemNoPrice } from "./menu_item_no_price";
import { SectionTitle } from "../menu_section_title/index";

const Divider: AnyStyledComponent = styled.hr`
  margin: 10px 0 20px 0;
  width: 100%;

  @media (max-width: 700px) {
    max-width: 80vw;
    margin: 0.5rem 0 1rem 0;
  }
`;

const ItemGroupWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
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
  align-items: flex-start;
  margin: 2rem 0;
  width: 60%;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const BackToTop: AnyStyledComponent = styled.a`
  color: #ffffff;
  font-size: 18px;
  text-decoration: underline;
  margin-top: 1rem;

  @media (max-width: 700px) {
    margin-top: 0.5rem;
  }
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
