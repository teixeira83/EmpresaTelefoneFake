import React from 'react';
import { Reset } from 'styled-reset';
import Home from './pages/Home';
import './assets/css/settings/colors'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Home />
    </React.Fragment>
  );
}

export default App;
