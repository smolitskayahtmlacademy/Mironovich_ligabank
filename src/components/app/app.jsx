import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {API_MAIN_ROUTE} from '../../utils/constants';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import './app.module.scss';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={API_MAIN_ROUTE}>
          <MainPage />
        </Route>
        <Route >
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
