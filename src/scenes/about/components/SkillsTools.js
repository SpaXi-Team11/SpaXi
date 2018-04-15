import React, { Component } from 'react';

import 'scenes/about/styles/style.css';

export default class SkillsTools extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div class="skills-tools">
        <div className="skills">
          <h1 className="theme__section-header">Skills</h1>
        </div>
        <div className="tools">
          <h1 className="theme__section-header">Tools</h1>
        </div>
      </div>
    );
  }
}
