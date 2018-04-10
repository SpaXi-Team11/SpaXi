import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/style.css';

import brandLogo from 'assets/brand/spaxi_brand_logo.svg';
import { Path } from 'commons/paths/Path';
import Navtab from 'commons/components/navbar/components/Navtab';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="navigation-bar">
        <Navbar expand="md">
          <NavbarBrand href="/"><img src={brandLogo} alt="brand-logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Navtab path={Path.ABOUT} title="About" />
              <Navtab path={Path.FEATURES} title="Features" />
              <Navtab path={Path.TEAM} title="Team" />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
