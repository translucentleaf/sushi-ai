import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";

import { Banner } from "../banner/index";
import { MenuSection } from "../menu_section";

import soupSaladMenu from "../../assets/menus/regular/soups_and_salad.json";
import appetizerMenu from "../../assets/menus/regular/appetizers.json";
import sushiSashimiMenu from "../../assets/menus/regular/sashimi.json";
import specialRollMenu from "../../assets/menus/regular/special_rolls.json";
import sushiRollMenu from "../../assets/menus/regular/sushi_rolls_hand_rolls.json";
import sushiBarMenu from "../../assets/menus/regular/entree_sushi_bar.json";
import kitchenMenu from "../../assets/menus/regular/entree_kitchen.json";
import riceMenu from "../../assets/menus/regular/entree_hibachi.json";
import noodleMenu from "../../assets/menus/regular/entree_noodles.json";
import hibachiDinnerMenu from "../../assets/menus/regular/hibachi_dinner.json";
import dessertMenu from "../../assets/menus/regular/dessert.json";
import kidsMenu from "../../assets/menus/regular/kids_menu.json";

const RegularMenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegularMenuPage: React.FC = (): JSX.Element => {
  return (
    <RegularMenuWrapper>
      <Banner
        image={menuBanner}
        text="REGULAR MENU"
        height="350px"
        position="center"
      />
      <MenuSection
        sectionTitle="Soups and Salad"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={soupSaladMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Appetizers"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={appetizerMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Sushi or Sashimi"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={sushiSashimiMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Special Rolls"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={specialRollMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Rolls and Hand Rolls"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={sushiRollMenu}
        priceToggle
      />
      <h1>FIXME WHAT COUNTS AS ENTREES???</h1>
      <MenuSection
        sectionTitle="Sushi Bar Entrees"
        sectionDesc="Served with Miso Soup and House Salad"
        sectionPrice="None"
        menuJSON={sushiBarMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Kitchen Entrees"
        sectionDesc="Served with Miso Soup and House Salad"
        sectionPrice="None"
        menuJSON={kitchenMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Hibachi Fried Rice"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={riceMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Noodle"
        sectionDesc="Can be served as udon (soup), yaki soba (stir-fried) or yaki udon (stir-fried)."
        sectionPrice="None"
        menuJSON={noodleMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Hibachi Dinner"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={hibachiDinnerMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Dessert Menu"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={dessertMenu}
        priceToggle
      />
      <MenuSection
        sectionTitle="Kids Menu"
        sectionDesc=""
        sectionPrice="None"
        menuJSON={kidsMenu}
        priceToggle
      />
      <h1>DISCLAIMER NOTICE HERE</h1>
    </RegularMenuWrapper>
  );
};

export { RegularMenuPage };
