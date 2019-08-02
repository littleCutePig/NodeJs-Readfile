import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

let Html = route =>
  <Switch>
    {
      route.route ?
        route.route.map(Item => (
          <Route
            key={Item.path}
            path={Item.path}
            render={props => (
              <Item.component {...props} route={Item.route} />
            )}></Route>
        ))
        : null}

  </Switch>

export default Html;