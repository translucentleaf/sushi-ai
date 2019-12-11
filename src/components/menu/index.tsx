import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import { Banner } from "../banner/index";

const MenuIcon: AnyStyledComponent = styled.span`
  background-color: lightblue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  font-size: 36px;
  text-align: center;
`;

const MenuText: AnyStyledComponent = styled(Link)`
  color: white;
  margin: 0 40px 0 40px;
  text-decoration: none;
`;

interface IconProps {
  name: string;
  link: string;
}

const MenuPageIcon: React.FC<IconProps> = (props): JSX.Element => {
  const { name, link } = props;

  return (
    <MenuText to={link}>
      <MenuIcon>{name}</MenuIcon>
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
  margin: 100px 75px 0 75px;
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
    </MenuWrapper>
  );
};

export { Menu };
