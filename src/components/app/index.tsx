import React, { setGlobal } from "reactn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { AboutPage } from "../about/index";
import { FindUsPage } from "../find_us/index";
import { Home } from "../home/index";
import { Menu } from "../menu/index";
import { NavBar } from "../navbar/index";
import { RegularMenuPage } from "../menu_pages/regular_menu";
import { LunchMenuPage } from "../menu_pages/lunch_menu";
import { DinnerMenuPage } from "../menu_pages/dinner_menu";

/*
  Use this when implementing themeing support
setGlobal({
  theme: "dark"
});
*/

setGlobal({
  navbarOpen: false
});

const Main = styled.main`
  background-color: #2c271d;
  color: #fff;
  margin: 0;
  min-height: 100vh;
  width: 100vw;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/find-us">
            <FindUsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/regular-menu">
            <RegularMenuPage />
          </Route>
          <Route path="/lunch-menu">
            <LunchMenuPage />
          </Route>
          <Route path="/dinner-menu">
            <DinnerMenuPage />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export { App };
