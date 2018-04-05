import React, { Component } from 'react';

import MemberSection from './MemberSection';

export default class HomeScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <MemberSection />
        <div style={{backgroundColor:'#ffff00', height:'1000px'}}>For testing. To remove later</div>
      </div>
    );
  }
}
