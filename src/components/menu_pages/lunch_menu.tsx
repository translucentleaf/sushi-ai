import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import { Banner } from "../banner/index";
import { MenuSection } from "../menu_section";

const LunchMenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LunchMenuPage: React.FC = (): JSX.Element => {
  const section = {
    title: "Lunch Menu",
    desc: "Available all day.",
    price: "None"
  };

  return (
    <LunchMenuWrapper>
      <Banner
        image={menuBanner}
        text="LUNCH ALL YOU CAN EAT"
        height="350px"
        position="center"
      />
      <MenuSection
        sectionTitle={section.title}
        sectionDesc={section.desc}
        sectionPrice={section.price}
      />
      <h1>sdsdsd</h1>
    </LunchMenuWrapper>
  );
};

export { LunchMenuPage };
