import React, { Component } from 'react';
import { Theme } from 'commons/theme/Theme';
import 'commons/components/footer/styles/style.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <p>&copy; 2017 Semester 1 CS3201 Software Engineering Project Team 11</p>
      </div>
    );
  }
}
