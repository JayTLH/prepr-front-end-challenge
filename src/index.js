import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DataProvider } from './data/dataContext';

import './index.scss';
import NavBar from './components/NavBar/NavBar';
import Main from './pages/Main/Main';

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/labs" exact component={Main} />
        <Route path="/projects" exact component={Main} />
      </Switch>

    </BrowserRouter>
  </DataProvider>,
  document.getElementById('root')
);