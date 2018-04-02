import React, { Component } from 'react';
import './App.css';
import NavigationBar from './commons/Navbar.js';
import Footer from './commons/Footer.js';

import HomeScene from './scenes/home/HomeScene.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HomeScene />
        <Footer />
      </div>
    );
  }
}

export default App;
