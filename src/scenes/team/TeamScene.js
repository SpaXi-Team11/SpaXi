import React, { Component } from 'react';

import Developers from './Developers';
import Advisors from './Advisors';
import Acknowledgement from './Acknowledgement';
import DeveloperProfileSection from './DeveloperProfileSection'

export default class TeamScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Developers />
        <Advisors />
        <Acknowledgement />
        <DeveloperProfileSection /> //Shld be a container then use forloop generate each profile section
      </div>
    );
  }
}
