import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Header } from '../layout'

import { Characters, Resources } from '../pages'

const Routes: React.FC = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <Characters />
      </Route>
      <Route exact path="/characters">
        <Characters />
      </Route>
      <Route exact path="/resources">
        <Resources />
      </Route>
      <Redirect to="/" />
    </Switch>
  </HashRouter>
)

export default Routes
