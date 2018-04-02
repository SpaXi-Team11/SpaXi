import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import NavigationBar from './commons/Navbar';
import Footer from './commons/Footer';

import HomeScene from './scenes/home/HomeScene';
import AboutScene from './scenes/about/AboutScene';
import FeatureScene from './scenes/features/FeatureScene';
import TeamScene from './scenes/team/TeamScene';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomeScene} />
            <Route path="/about" component={AboutScene} />
            <Route path="/features" component={FeatureScene} />
            <Route path="/team" component={TeamScene} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
