import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import { HomePage } from './pages/HomePage/HomePage';

import './sass/main.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { AboutVizPage } from './pages/About/AboutVizPage/AboutVizPage';
import { VifCommitteePage } from './pages/About/VifCommitteePage/VifCommitteePage';
import { ForStudentsPage } from './pages/EventInformation/ForStudentsPage/ForStudentsPage';
import { ForIndustryPage } from './pages/EventInformation/ForIndustryPage/ForIndustryPage';
import { CommonQuestionsPage } from './pages/EventInformation/CommonQuestionsPage/CommonQuestionsPage';
// import { SchedulePage } from './pages/SchedulePage/SchedulePage';

console.log(`██╗   ██╗██╗███████╗
██║   ██║██║██╔════╝
██║   ██║██║█████╗  
╚██╗ ██╔╝██║██╔══╝  
 ╚████╔╝ ██║██║     
  ╚═══╝  ╚═╝╚═╝     
                    `);

export function App(): JSX.Element {
  const { pathname } = useLocation<History>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HelmetProvider>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>

          <Route exact path='/about/about-viz'>
            <AboutVizPage></AboutVizPage>
          </Route>

          <Route exact path='/about/vif-committee'>
            <VifCommitteePage></VifCommitteePage>
          </Route>

          <Route exact path='/event-information/for-students'>
            <ForStudentsPage></ForStudentsPage>
          </Route>

          <Route exact path='/event-information/for-industry'>
            <ForIndustryPage></ForIndustryPage>
          </Route>

          <Route exact path='/event-information/common-questions'>
            <CommonQuestionsPage></CommonQuestionsPage>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </HelmetProvider>
  );
}
