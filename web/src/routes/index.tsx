import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Header } from '../layout'

import { CharactersPage, ResourcesPage } from '../pages'

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
      <Route exact path="/resources">
        <ResourcesPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  </HashRouter>
)

export default Routes
