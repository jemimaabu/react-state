import React, { useState } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { ColorChange1 } from './ColorChange1'
import { ColorChange2 } from './ColorChange2'
import ThemeContext from '../context/ThemeContext'

export const App = () => {
  const theme = useState("#815428");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ColorChange1 />
        <ColorChange2 />
      </div>
    </ThemeContext.Provider>
  );
}

