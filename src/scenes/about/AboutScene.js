import React, { Component } from 'react';

import ProjectHeader from './components/ProjectHeader';
import ProjectSummary from './components/ProjectSummary';
import SkillsTools from './components/SkillsTools';

export default class AboutScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <ProjectHeader />
        <ProjectSummary />
        <SkillsTools />
      </div>
    );
  }
}
