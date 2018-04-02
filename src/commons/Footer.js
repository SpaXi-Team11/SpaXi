import React, { Component } from 'react';

const styleFooter = {
  height: 100,
  backgroundColor: '#5c5c5c'
}

const styleCopyright = {
  color: '#ffffff',
  fontSize: '0.5em'
}

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styleFooter}>
        <p style={styleCopyright}>&copy;2017 Semester 1 CS3201 Software Engineering Project Team 11</p>
      </div>
    );
  }
}
