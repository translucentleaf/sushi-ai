import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import { Banner } from "../banner/index";
import { MenuSection } from "../menu_section";

const RegularMenuWrapper: AnyStyledComponent = styled.main`
  border: solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegularMenuPage: React.FC = (): JSX.Element => {
  const section = {
    title: "Regular Menu",
    desc: "Available all day.",
    price: "None"
  };

  return (
    <RegularMenuWrapper>
      <Banner
        image={menuBanner}
        text="REGULAR MENU"
        height="350px"
        position="center"
      />
      <MenuSection
        sectionTitle={section.title}
        sectionDesc={section.desc}
        sectionPrice={section.price}
      />
      <h1>sdsdsd</h1>
    </RegularMenuWrapper>
  );
};

export { RegularMenuPage };
