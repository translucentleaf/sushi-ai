import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import MaterialIcon from "material-icons-react";

import { ButtonSmall } from "../button_small/index";
import { MobileNavScreen } from "./mobile_nav_screen";

const Nav: AnyStyledComponent = styled.div`
  background-color: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
`;

const NavWrap: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 20px 50px 20px 50px;
  width: 100%;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const PageLink: AnyStyledComponent = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 30px;

  &:hover {
    color: #e6e6e6;
  }
`;

const Title: AnyStyledComponent = styled(Link)`
  color: #fff;
  font-size: 36px;
  font-weight: medium;
  text-decoration: none;
  margin: 0;

  &:hover {
    color: #e6e6e6;
  }
`;

const Navigation: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileButton: AnyStyledComponent = styled.a`
  color: #fff;
  display: none;
  text-decoration: none;

  &:hover {
    color: #e6e6e6;
  }

  @media (max-width: 700px) {
    display: flex;
    height: 40px;
    margin-top: 8px;
  }
`;

const NavBar: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavWrap>
        <Title to="/">Sushi Ai</Title>
        <Navigation>
          <PageLink to="/menu">MENU</PageLink>
          <PageLink to="/find-us">FIND US</PageLink>
          <PageLink to="/about">ABOUT</PageLink>
          <ButtonSmall text="ORDER" fontSize="34" />
        </Navigation>
        <MobileButton onClick={(): void => setOpen(true)}>
          <MaterialIcon icon="menu" color="#ffffff" size="large" />
        </MobileButton>
      </NavWrap>
      <MobileNavScreen open={open} closeFunction={(): void => setOpen(false)} />
    </Nav>
  );
};

export { NavBar };
