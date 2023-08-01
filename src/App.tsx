import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomePage } from './pages/HomePage/HomePage';

import './sass/main.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

export function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}
