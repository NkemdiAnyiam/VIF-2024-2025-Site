import React from 'react';
import { Route, Switch } from "react-router-dom";

import './sass/main.scss';
import { NavBar } from './components/NavBar/NavBar';

export function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/'>
          <div>aaa</div>
        </Route>
      </Switch>
    </div>
  );
}
