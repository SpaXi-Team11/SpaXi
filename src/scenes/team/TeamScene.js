import React, { Component } from 'react';

import { Theme } from '../../commons/Theme';

const styleTitle = {
  fontSize: Theme.FONTSIZE_SECTION_HEADER
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
