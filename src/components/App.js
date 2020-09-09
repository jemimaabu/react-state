import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { InputA } from './InputA';
import InputB from './InputB'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <InputA />
        <InputB />
      </div>
    );
  }
}

export default App;
