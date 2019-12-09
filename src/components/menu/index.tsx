import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import { Banner } from "../banner/index";
import { MenuSection } from "../menu_section/index";

const MenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu: React.FC = () => (
  <MenuWrapper>
    <Banner image={menuBanner} text="MENU" height="350px" position="center" />
    <MenuSection
      sectionTitle="Sushi"
      sectionDesc="Just your everyday normal sushi"
      sectionPrice="None"
    />
    <MenuSection
      sectionTitle="Sushi"
      sectionDesc="Just your everyday normal sushi"
      sectionPrice="10.00"
    />
  </MenuWrapper>
);

export { Menu };
