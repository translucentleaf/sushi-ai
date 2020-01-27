import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Banner } from "../banner/index";
import { Footer } from "../footer/index";
import { MenuSection } from "../menu_section";
import { MenuTableOfContents } from "../menu_table_contents";

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

const Disclaimer: AnyStyledComponent = styled.h1`
  width: 60%;
  font-size: 18px;
  margin-bottom: 3rem;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const DinnerMenuPage: React.FC = (): JSX.Element => {
  const menuSections = [
    "Soups and salad",
    "Appetizers",
    "Additional Appetizers",
    "Nigiri",
    "Additional Nigiri",
    "Rolls",
    "Additional Rolls",
    "Ice Cream"
  ];

  return (
    <DinnerMenuWrapper>
      <Banner
        image={menuBanner}
        text="Dinner All You Can Eat Menu"
        height="350px"
        position="center"
      />
      <MenuTableOfContents name="Lunch Menu" sections={menuSections} />
      <MenuSection
        sectionTitle="Soups and salad"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={soupSaladMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <MenuSection
        sectionTitle="Appetizers"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={appetizerMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <MenuSection
        sectionTitle="Additional Appetizers"
        sectionDesc="Only available if you choose the premium option!"
        sectionPrice="None"
        menuJSON={premiumAppetizerMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <MenuSection
        sectionTitle="Nigiri"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={nigiriMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <MenuSection
        sectionTitle="Additional Nigiri"
        sectionDesc="Only available if you choose the premium option!"
        sectionPrice="None"
        menuJSON={premiumNigiriMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <MenuSection
        sectionTitle="Rolls"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={rollsMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <MenuSection
        sectionTitle="Additional Rolls"
        sectionDesc="Only available if you choose the premium option!"
        sectionPrice="None"
        menuJSON={premiumRollsMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <MenuSection
        sectionTitle="Ice Cream"
        sectionDesc="Only available if you choose the premium option!"
        sectionPrice="None"
        menuJSON={iceCreamMenu}
        priceToggle={false}
        menuType="Dinner Menu"
      />
      <Disclaimer>
        Consumer advisory: Consuming raw or undercooked meats, poultry, seafood,
        shellfish, or eggs may increase your risk of foodborne illness,
        especially if you have a medical condition.
      </Disclaimer>
      <Footer />
    </DinnerMenuWrapper>
  );
};

export { DinnerMenuPage };
