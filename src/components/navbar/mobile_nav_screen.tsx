import React from "react";
import { Link } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import MaterialIcon from "material-icons-react";

import { ButtonSmall } from "../button_small/index";

const MobileNavWrapper: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
  margin-top: 350px;
`;

const MobileNav: AnyStyledComponent = styled.div`
  border-radius: 10px;
  background-color: #2c271d;
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 90vw;
`;

const MobileNavHeader: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 36px;
    font-weight: normal;
  }
`;

const CloseIcon: AnyStyledComponent = styled.div`
  height: 35px;
`;

const MobileNavContent: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 75%;

  a {
    font-size: 24px;
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

interface NavScreenProps {
  open: boolean;
  closeFunction: Function;
}

const MobileNavScreen: React.FC<NavScreenProps> = (props): JSX.Element => {
  const { open, closeFunction } = props;

  return (
    <MobileNavWrapper>
      {open ? (
        <MobileNav>
          <MobileNavHeader>
            <h1>Options</h1>
            <CloseIcon>
              <MaterialIcon
                icon="clear"
                color="#ffffff"
                size="large"
                onClick={(): void => closeFunction()}
              />
            </CloseIcon>
          </MobileNavHeader>
          <MobileNavContent>
            <PageLink to="/menu">MENU</PageLink>
            <PageLink to="/find-us">FIND US</PageLink>
            <PageLink to="/about">ABOUT</PageLink>
            <ButtonSmall text="ORDER" fontSize="34" />
          </MobileNavContent>
        </MobileNav>
      ) : null}
    </MobileNavWrapper>
  );
};

export { MobileNavScreen };
