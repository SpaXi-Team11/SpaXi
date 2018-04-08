import React, { Component } from 'react';

import 'scenes/team/styles/style.css';

export default class AdvisorProfileCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="advisor-profile-cell">
        <img src={this.props.image} />
        <h3>{this.props.name}</h3>
        <h5>{this.props.designature}</h5>
      </div>
    );
  }
}
