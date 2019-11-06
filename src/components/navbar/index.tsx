import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../button/index";

const Nav = styled.div`
  background-color: transparent;
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0 1rem 0;
  position: absolute;
  width: 100vw;
`;

const PageLink = styled(Link)`
  color: #fff;
  font-size: 26px;
  text-decoration: none;

  &:hover {
    color: #e6e6e6;
  }
`;

const NavBar: React.FC = (): JSX.Element => {
  return (
    <Nav>
      <PageLink to="/">Sushi Ai</PageLink>
      <PageLink to="/menu">Menu</PageLink>
      <PageLink to="/find-us">Find Us</PageLink>
      <PageLink to="/about">About</PageLink>
      <Button text="Order" />
    </Nav>
  );
};

export { NavBar };
