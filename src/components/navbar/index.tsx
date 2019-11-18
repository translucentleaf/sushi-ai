import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonSmall } from "../button_small/index";

const Nav = styled.div`
  background-color: transparent;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;
  position: absolute;
  height: 81px;
  width: 100vw;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
`;

const PageLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 30px;

  &:hover {
    color: #e6e6e6;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: medium;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

const NavBar: React.FC = (): JSX.Element => {
  return (
    <Nav>
      <NavWrap>
        <Title>
          <PageLink to="/">Sushi Ai</PageLink>
        </Title>
        <Navigation>
          <PageLink to="/menu">MENU</PageLink>
          <PageLink to="/find-us">FIND US</PageLink>
          <PageLink to="/about">ABOUT</PageLink>
          <ButtonSmall text="ORDER" fontSize="34" />
        </Navigation>
      </NavWrap>
    </Nav>
  );
};

export { NavBar };
