import React, { Component } from 'react';

import MemberSection from './MemberSection'

const styleTitle = {
  color: '#5c5c5c'
}

export default class HomeScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MemberSection />
      </div>
    );
  }
}
