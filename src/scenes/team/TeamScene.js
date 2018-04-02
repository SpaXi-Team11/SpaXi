import React, { Component } from 'react';

import { fontSizeSectionHeader } from '../../commons/Constants';

const styleTitle = {
  fontSize: fontSizeSectionHeader
}

export default class TeamScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <p style={styleTitle}>The Developers</p>
        <p>The Advisors</p>
      </div>
    );
  }
}
