import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";

import { Banner } from "../banner/index";
import { Footer } from "../footer/index";

const MenuIcon: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  max-width: 150px;
  text-align: center;

  h1 {
    font-size: 32px;
    font-weight: normal;
  }
`;

const MenuText: AnyStyledComponent = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightblue;
  border-radius: 10px;
  color: white;
  margin: 40px 40px 40px 40px;
  text-decoration: none;
  width: 250px;
`;

interface IconProps {
  name: string;
  link: string;
}

const MenuPageIcon: React.FC<IconProps> = (props): JSX.Element => {
  const { name, link } = props;

  return (
    <MenuText to={link}>
      <MenuIcon>
        <h1>{name}</h1>
      </MenuIcon>
    </MenuText>
  );
};

const MenuWrapper: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 680px;
  max-width: 1080px;
  margin: 100px 75px 100px 75px;

  @media (max-width: 700px) {
    margin: 40px 0 40px 0;
    min-width: 0%;
    flex-direction: column;
  }
`;

const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <Banner image={menuBanner} text="MENU" height="350px" position="center" />
      <MenuGroup>
        <MenuPageIcon name="Regular Menu" link="/regular-menu" />
        <MenuPageIcon name="Lunch All You Can Eat" link="/lunch-menu" />
        <MenuPageIcon name="Dinner All You Can Eat" link="/dinner-menu" />
      </MenuGroup>
      <Footer />
    </MenuWrapper>
  );
};

export { Menu };
