import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';

import { Theme } from 'commons/theme/Theme';

const styleTab = {
  color: '#676767',
  fontSize: '1.2em'
}

export default class Navtab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavItem>
        <NavLink href={this.props.path}><div style={styleTab}>{this.props.title}</div></NavLink>
      </NavItem>
    );
  }
}

// Navtab.propTypes = {
//   path: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired
// };
