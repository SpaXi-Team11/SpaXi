import React, { Component } from 'react';
import './App.css';
import NavigationBar from './commons/navbar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
