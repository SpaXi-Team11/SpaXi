import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';

export default class Navtab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavItem>
        <NavLink href={this.props.path}><span>{this.props.title}</span></NavLink>
      </NavItem>
    );
  }
}

// Navtab.propTypes = {
//   path: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired
// };
