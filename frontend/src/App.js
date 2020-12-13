import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
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
    <Provider store={store}>
      <Reset />

      <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>  
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>  
        <Route path={ROUTES.CALCULATOR}>
          <Calculator />
        </Route>
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
