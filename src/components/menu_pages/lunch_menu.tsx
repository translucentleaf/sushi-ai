import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { Banner } from "../banner/index";
import { MenuSection } from "../menu_section";

import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import soupMenu from "../../assets/menus/lunch/soups.json";
import saladMenu from "../../assets/menus/lunch/salad.json";
import appetizerMenu from "../../assets/menus/lunch/appetizers.json";
import premiumAppetizerMenu from "../../assets/menus/lunch/premium_appetizers.json";
import nigiriMenu from "../../assets/menus/lunch/nigiri.json";
import premiumNigiriMenu from "../../assets/menus/lunch/premium_nigiri.json";
import rollsMenu from "../../assets/menus/lunch/rolls.json";
import premiumRollsMenu from "../../assets/menus/lunch/premium_rolls.json";

const LunchMenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LunchMenuPage: React.FC = (): JSX.Element => {
  return (
    <LunchMenuWrapper>
      <Banner
        image={menuBanner}
        text="LUNCH ALL YOU CAN EAT"
        height="350px"
        position="center"
      />
      <h1>FIXME: Add section title component</h1>
      <MenuSection
        sectionTitle="Soups"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={soupMenu}
        priceToggle={false}
      />
      <MenuSection
        sectionTitle="Salad"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={saladMenu}
        priceToggle={false}
      />
      <MenuSection
        sectionTitle="Appetizers"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={appetizerMenu}
        priceToggle={false}
      />
      <MenuSection
        sectionTitle="Additional Appetizers"
        sectionDesc="Only available in the premium all you can eat option!"
        sectionPrice="None"
        menuJSON={premiumAppetizerMenu}
        priceToggle={false}
      />
      <MenuSection
        sectionTitle="Nigiri"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={nigiriMenu}
        priceToggle={false}
      />
      <MenuSection
        sectionTitle="Additional Nigiri"
        sectionDesc="Only available in the premium all you can eat option!"
        sectionPrice="None"
        menuJSON={premiumNigiriMenu}
        priceToggle={false}
      />
      <MenuSection
        sectionTitle="Rolls"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={rollsMenu}
        priceToggle={false}
      />
      <MenuSection
        sectionTitle="Additional Rolls"
        sectionDesc="Only available in the premium all you can option!"
        sectionPrice="None"
        menuJSON={premiumRollsMenu}
        priceToggle={false}
      />
      <h1>sdsdsd</h1>
    </LunchMenuWrapper>
  );
};

export { LunchMenuPage };
