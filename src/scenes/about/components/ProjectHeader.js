import React, { Component } from 'react';

import 'scenes/about/styles/style.css';
import screenshot from 'assets/brand/spaxi_welcome_screen.png';

export default class ProjectHeader extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div class="project-header">
        <img src={screenshot} alt="screenshot"/>
        <div class="right">
          <h2>SpaXi - The Static Program Analyzer</h2>
          <h5>Aug 2017 - Nov 2017</h5>
          <h5>Software Engineering Project</h5>
        </div>
      </div>
    );
  }
}
