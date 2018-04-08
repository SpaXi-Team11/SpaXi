import React, { Component } from 'react';

import 'scenes/team/styles/style.css';
import zhaoJin from 'assets/members/advisor_display_picture/ZhaoJin.png';
import cristina from 'assets/members/advisor_display_picture/Cristina.png';
import thilina from 'assets/members/advisor_display_picture/Thilina.png';

import AdvisorProfileCell from './AdvisorProfileCell';

export default class Advisors extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="advisors">
        <h1 className="theme__section-header">Advisors</h1>
        <div className="display-cell">
          <AdvisorProfileCell image={zhaoJin} name="Jin Zhao" designature="Lecturer" />
          <AdvisorProfileCell image={cristina} name="Cristina Carbunaru" designature="Lecturer" />
          <AdvisorProfileCell image={thilina} name="Thilina" designature="Teaching Assistant" />
        </div>
      </div>
    );
  }
}
