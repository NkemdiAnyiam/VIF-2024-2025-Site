import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomePage } from './pages/HomePage/HomePage';

import './sass/main.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
// import { AboutVizPage } from './pages/About/AboutVizPage.tsx/AboutVizPage';
// import { VifCommitteePage } from './pages/About/VifCommitteePage/VifCommitteePage';
// import { ForStudentsPage } from './pages/EventInformation/ForStudentsPage/ForStudentsPage';
// import { ForIndustryPage } from './pages/EventInformation/ForIndustryPage/ForIndustryPage';
// import { CommonQuestionsPage } from './pages/EventInformation/CommonQuestionsPages/CommonQuestionsPage';
// import { SchedulePage } from './pages/SchedulePage/SchedulePage';

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
