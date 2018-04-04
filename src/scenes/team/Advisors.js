import React, { Component } from 'react';

import { Theme } from 'commons/theme/Theme';
import { AdvisorDisplayPic } from 'commons/image_objects/AdvisorDisplayPic';

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
