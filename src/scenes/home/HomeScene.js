import React, { Component } from 'react';

import HomeBanner from './components/HomeBanner';
import MemberSection from './components/MemberSection';

export default class HomeScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <HomeBanner />
        <MemberSection />
      </div>
    );
  }
}
