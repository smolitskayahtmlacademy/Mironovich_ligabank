import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';

import './app.module.scss';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MainPage />
      </Route>
    </BrowserRouter>
  );
}


export default App;
