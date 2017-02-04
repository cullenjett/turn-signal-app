import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div className="container-fluid">
            <a href="/">
              <img src="https://cars.blinker.com/images/blinker-logo-tag-line.svg" className="App__logo" alt="logo" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
