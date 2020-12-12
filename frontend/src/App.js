import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import About from './pages/About';
import './assets/css/settings/colors'
import './App.css';
import * as ROUTES from './Routes.js';

function App() {
  return (
  <React.Fragment>
      <Reset />

      <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>  
        <Route exact path={ROUTES.ABOUT}>
          <About />
        </Route>  
        <Route path={ROUTES.CALCULATOR}>
          <Calculator />
        </Route>
      </Switch>
      </Router>
  </React.Fragment>
  );
}

export default App;
