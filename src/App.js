import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavigationBar from './commons/Navbar';
import Footer from './commons/Footer';

import HomeScene from './scenes/home/HomeScene';
import AboutScene from './scenes/about/AboutScene';
import FeatureScene from './scenes/features/FeatureScene';
import TeamScene from './scenes/team/TeamScene';

import { PATH } from './commons/Path';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path={PATH.HOME} component={HomeScene} />
            <Route path={PATH.ABOUT} component={AboutScene} />
            <Route path={PATH.FEATURES} component={FeatureScene} />
            <Route path={PATH.TEAM} component={TeamScene} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
