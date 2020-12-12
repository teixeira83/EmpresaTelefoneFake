import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import './assets/css/settings/colors'
import './App.css';

function App() {
  return (
  <React.Fragment>
      <Reset />

      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>  
        
        <Route path="/calculadora">
          <Calculator />
        </Route>
      </Switch>
      </Router>
  </React.Fragment>
  );
}

export default App;
