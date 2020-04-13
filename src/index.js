import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DataProvider } from './data/Jason_Huang_FrontEnd_Developer_dataContext';

import './Jason_Huang_FrontEnd_Developer_index.scss';
import NavBar from './components/NavBar/Jason_Huang_FrontEnd_Developer_NavBar';
import Main from './pages/Main/Jason_Huang_FrontEnd_Developer_Main';
import ChallengeManager from './pages/ChallengeManager/Jason_Huang_FrontEnd_Developer_ChallengeManager';

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/labs" exact component={Main} />
        <Route path="/projects" exact component={Main} />
        <Route path="/challengeManager/:id" exact component={ChallengeManager} />
      </Switch>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById('root')
);