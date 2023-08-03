import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";

import { HomePage } from './pages/HomePage/HomePage';

import './sass/main.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { AboutVizPage } from './pages/About/AboutVizPage/AboutVizPage';
// import { VifCommitteePage } from './pages/About/VifCommitteePage/VifCommitteePage';
// import { ForStudentsPage } from './pages/EventInformation/ForStudentsPage/ForStudentsPage';
// import { ForIndustryPage } from './pages/EventInformation/ForIndustryPage/ForIndustryPage';
// import { CommonQuestionsPage } from './pages/EventInformation/CommonQuestionsPages/CommonQuestionsPage';
// import { SchedulePage } from './pages/SchedulePage/SchedulePage';

export function App(): JSX.Element {
  const {pathname} = useLocation<History>();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, [pathname]);

  return (
    <div className="App">
      <NavBar></NavBar>

      <Switch>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>

        <Route exact path='/about/about-viz'>
          <AboutVizPage></AboutVizPage>
        </Route>
      </Switch>

      <Footer></Footer>
    </div>
  );
}
