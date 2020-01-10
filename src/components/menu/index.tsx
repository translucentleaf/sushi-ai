import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "react-router-dom";

import { Banner } from "../banner/index";
import { Footer } from "../footer/index";

import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import regularMenuImg from "../../assets/images/misc/regular_menu_img.jpg";
import lunchMenuImg from "../../assets/images/misc/lunch_menu_img.jpg";
import dinnerMenuImg from "../../assets/images/misc/dinner_menu_img.jpg";

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

  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props: IconProps): string => props.img}) no-repeat center;
  background-size: cover;
  border-radius: 10px;
  color: white;
  margin: 40px 40px 40px 40px;
  text-decoration: none;
  width: 250px;
`;

interface IconProps {
  name: string;
  link: string;
  img: string;
}

const MenuPageIcon: React.FC<IconProps> = (props): JSX.Element => {
  const { name, link, img } = props;

  return (
    <MenuText to={link} img={img}>
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
      <Banner image={menuBanner} text="Menu" height="350px" position="center" />
      <MenuGroup>
        <MenuPageIcon
          name="Regular Menu"
          link="/regular-menu"
          img={regularMenuImg}
        />
        <MenuPageIcon
          name="Lunch All You Can Eat"
          link="/lunch-menu"
          img={lunchMenuImg}
        />
        <MenuPageIcon
          name="Dinner All You Can Eat"
          link="/dinner-menu"
          img={dinnerMenuImg}
        />
      </MenuGroup>
      <Footer />
    </MenuWrapper>
  );
};

export { Menu };
