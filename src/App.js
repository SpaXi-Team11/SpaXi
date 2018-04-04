import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Path } from 'commons/paths/Path';
import NavigationBar from 'commons/components/Navbar';
import Footer from 'commons/components/Footer';
import HomeScene from 'scenes/home/HomeScene';
import AboutScene from 'scenes/about/AboutScene';
import FeatureScene from 'scenes/features/FeatureScene';
import TeamScene from 'scenes/team/TeamScene';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path={Path.HOME} component={HomeScene} />
            <Route path={Path.ABOUT} component={AboutScene} />
            <Route path={Path.FEATURES} component={FeatureScene} />
            <Route path={Path.TEAM} component={TeamScene} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
