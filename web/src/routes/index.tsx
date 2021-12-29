import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { Header, Footer } from "../layout";

import { CharactersPage, InfoPage, ResourcesPage } from "../pages";

const Routes: React.FC = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <CharactersPage />
      </Route>
      <Route exact path="/characters">
        <CharactersPage />
      </Route>
      <Route exact path="/info">
        <InfoPage />
      </Route>
      <Route exact path="/resources">
        <ResourcesPage />
      </Route>
      <Redirect to="/" />
    </Switch>
    <Footer />
  </HashRouter>
);

export default Routes;
