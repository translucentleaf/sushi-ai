import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { Banner } from "../banner/index";
import { Footer } from "../footer/index";
import { MenuNotice } from "./menu_notice";
import { MenuSection } from "../menu_section";
import { MenuTableOfContents } from "../menu_table_contents";

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

const Disclaimer: AnyStyledComponent = styled.h1`
  width: 60%;
  font-size: 18px;
  margin-bottom: 3rem;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const LunchMenuPage: React.FC = (): JSX.Element => {
  const menuSections = [
    "Soups",
    "Salad",
    "Appetizers",
    "Additional Appetizers",
    "Nigiri",
    "Additional Nigiri",
    "Rolls",
    "Additional Rolls"
  ];

  return (
    <LunchMenuWrapper>
      <Banner
        image={menuBanner}
        text="Lunch All You Can Eat Menu"
        height="350px"
        position="center"
      />
      <MenuNotice lunch />
      <MenuTableOfContents name="Lunch Menu" sections={menuSections} />
      <MenuSection
        sectionTitle="Soups"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={soupMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <MenuSection
        sectionTitle="Salad"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={saladMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <MenuSection
        sectionTitle="Appetizers"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={appetizerMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <MenuSection
        sectionTitle="Additional Appetizers"
        sectionDesc="Only available in the premium all you can eat option!"
        sectionPrice="None"
        menuJSON={premiumAppetizerMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <MenuSection
        sectionTitle="Nigiri"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={nigiriMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <MenuSection
        sectionTitle="Additional Nigiri"
        sectionDesc="Only available in the premium all you can eat option!"
        sectionPrice="None"
        menuJSON={premiumNigiriMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <MenuSection
        sectionTitle="Rolls"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={rollsMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <MenuSection
        sectionTitle="Additional Rolls"
        sectionDesc="Only available in the premium all you can option!"
        sectionPrice="None"
        menuJSON={premiumRollsMenu}
        priceToggle={false}
        menuType="Lunch Menu"
      />
      <Disclaimer>
        Consumer advisory: Consuming raw or undercooked meats, poultry, seafood,
        shellfish, or eggs may increase your risk of foodborne illness,
        especially if you have a medical condition.
      </Disclaimer>
      <Footer />
    </LunchMenuWrapper>
  );
};

export { LunchMenuPage };
