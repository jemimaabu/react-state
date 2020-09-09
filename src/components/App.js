import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { HooksInput } from './HooksInput';
// import InputB from './ClassInput'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <HooksInput />
      </div>
    );
  }
}

export default App;
