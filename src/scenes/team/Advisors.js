import React, { Component } from 'react';

import { Theme } from '../../commons/Theme';
import { AdvisorDisplayPic } from '../../assets/members/AdvisorDisplayPic';

const styleTitle = {
  fontSize: Theme.FONTSIZE_SECTION_HEADER
}

export default class Advisors extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1 style={styleTitle}>Advisors</h1>
        <img src={AdvisorDisplayPic.ZHAO_JIN} />
        <img src={AdvisorDisplayPic.CRISTINA} />
        <img src={AdvisorDisplayPic.THILINA} />
      </div>
    );
  }
}
