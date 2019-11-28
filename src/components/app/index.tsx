import React, { setGlobal } from "reactn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { AboutPage } from "../about/index";
import { FindUsPage } from "../find_us/index";
import { Home } from "../home/index";
import { Menu } from "../menu/index";
import { NavBar } from "../navbar/index";

setGlobal({
  theme: "dark"
});

const Main = styled.main`
  background-color: #2c271d;
  color: #fff;
  margin: 0;
  min-height: 100vh;
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
        </Switch>
      </Main>
    </Router>
  );
};

export { App };
