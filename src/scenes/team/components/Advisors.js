import React, { Component } from 'react';

import 'scenes/team/styles/style.css';
import { AdvisorDisplayPic } from 'commons/image_objects/AdvisorDisplayPic';

export default class Advisors extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="advisors">
        <h1 className="theme__section-header">Advisors</h1>
        <img src={AdvisorDisplayPic.ZHAO_JIN} />
        <img src={AdvisorDisplayPic.CRISTINA} />
        <img src={AdvisorDisplayPic.THILINA} />
      </div>
    );
  }
}
