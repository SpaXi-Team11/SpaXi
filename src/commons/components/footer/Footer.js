import React, { Component } from 'react';
import { Theme } from 'commons/theme/Theme';

const styleFooter = {
  height: '3em',
  backgroundColor: Theme.COLOR_BRAND_DARKGREY,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const styleCopyright = {
  color: 'white',
  fontSize: '0.5em'
};

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styleFooter}>
        <p style={styleCopyright}>&copy; 2017 Semester 1 CS3201 Software Engineering Project Team 11</p>
      </div>
    );
  }
}
