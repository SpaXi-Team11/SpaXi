import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

import { Path } from 'commons/paths/Path';
import NavigationBar from 'commons/components/navbar/Navbar';
import Footer from 'commons/components/footer/Footer';
import PageNotFound from 'scenes/page_not_found/PageNotFound';
import HomeScene from 'scenes/home/HomeScene';
import AboutScene from 'scenes/about/AboutScene';
import FeatureScene from 'scenes/features/FeatureScene';
import TeamScene from 'scenes/team/TeamScene';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header><NavigationBar /></header>
          <body>
            <Switch>
              <Route exact path={Path.HOME} component={HomeScene} />
              <Route path={Path.ABOUT} component={AboutScene} />
              <Route path={Path.FEATURES} component={FeatureScene} />
              <Route path={Path.TEAM} component={TeamScene} />
              <Route path={Path.PAGE_NOT_FOUND} component={PageNotFound} />
            </Switch>
          </body>
          <footer><Footer /></footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
