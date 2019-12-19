import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Banner } from "../banner/index";
import { MenuSection } from "../menu_section";

import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import soupSaladMenu from "../../assets/menus/dinner/soups_and_salad.json";
import appetizerMenu from "../../assets/menus/dinner/appetizers.json";
import premiumAppetizerMenu from "../../assets/menus/dinner/premium_appetizers.json";
import nigiriMenu from "../../assets/menus/dinner/nigiri.json";
import premiumNigiriMenu from "../../assets/menus/dinner/premium_nigiri.json";
import rollsMenu from "../../assets/menus/dinner/rolls.json";
import premiumRollsMenu from "../../assets/menus/dinner/premium_sushi.json";
import iceCreamMenu from "../../assets/menus/dinner/ice_cream.json";

const DinnerMenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DinnerMenuPage: React.FC = (): JSX.Element => {
  return (
    <DinnerMenuWrapper>
      <Banner
        image={menuBanner}
        text="DINNER ALL YOU CAN EAT"
        height="350px"
        position="center"
      />
      <MenuSection
        sectionTitle="Soups and salad"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={soupSaladMenu}
      />
      <MenuSection
        sectionTitle="Appetizers"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={appetizerMenu}
      />
      <MenuSection
        sectionTitle="Additional Appetizers"
        sectionDesc="Only available if you choose the premium option!"
        sectionPrice="None"
        menuJSON={premiumAppetizerMenu}
      />
      <MenuSection
        sectionTitle="Nigiri"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={nigiriMenu}
      />
      <MenuSection
        sectionTitle="Additional Nigiri"
        sectionDesc="Only available if you choose the premium option!"
        sectionPrice="None"
        menuJSON={premiumNigiriMenu}
      />
      <MenuSection
        sectionTitle="Rolls"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={rollsMenu}
      />
      <MenuSection
        sectionTitle="Additional Rolls"
        sectionDesc="Only available if you choose the premium option!"
        sectionPrice="None"
        menuJSON={premiumRollsMenu}
      />
      <MenuSection
        sectionTitle="Ice Cream"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={iceCreamMenu}
      />
      <h1>sdsdsd</h1>
    </DinnerMenuWrapper>
  );
};

export { DinnerMenuPage };
