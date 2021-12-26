import React, { Component } from 'react';
import logo from './gret.png';
import './App.css';
import SMSForm from './SMSForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="swing" alt="logo" width='30%'/>

          <SMSForm />
        </header>
      </div>
    );
  }
}

export default App;
