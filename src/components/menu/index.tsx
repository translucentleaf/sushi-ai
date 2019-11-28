import React from "react";
// import styled from "styled-components";
import menuBanner from "../../assets/images/banners/menu_banner.jpg";
import { Banner } from "../banner/index";

const Menu: React.FC = () => (
  <div>
    <Banner image={menuBanner} text="MENU" height="350px" position="center" />
  </div>
);

export { Menu };
