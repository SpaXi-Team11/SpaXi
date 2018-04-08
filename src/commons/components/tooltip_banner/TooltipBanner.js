import React, { Component } from 'react';

import './styles/style.css';

export default class TooltipBanner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tooltip-banner">
          <p>{this.props.children}</p>
          <div className="inverted-triangle"></div>
      </div>
    );
  }
}
