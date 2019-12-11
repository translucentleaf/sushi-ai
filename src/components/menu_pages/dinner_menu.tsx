import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import { Banner } from "../banner/index";
import { MenuSection } from "../menu_section";

const DinnerMenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DinnerMenuPage: React.FC = (): JSX.Element => {
  const section = {
    title: "Dinner Menu",
    desc: "Available all day.",
    price: "None"
  };

  return (
    <DinnerMenuWrapper>
      <Banner
        image={menuBanner}
        text="DINNER ALL YOU CAN EAT"
        height="350px"
        position="center"
      />
      <MenuSection
        sectionTitle={section.title}
        sectionDesc={section.desc}
        sectionPrice={section.price}
      />
      <h1>sdsdsd</h1>
    </DinnerMenuWrapper>
  );
};

export { DinnerMenuPage };
