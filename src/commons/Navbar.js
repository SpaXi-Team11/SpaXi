import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import brandLogo from 'assets/brand/spaxi_brand_logo.svg';
import { Theme } from './Theme';
import { Path } from './Path';

const styleTab = {
  color: '#676767',
  fontSize: '1.2em'
}

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
      <div>
        <Navbar style={{backgroundColor: Theme.COLOR_BRAND_BLACK}} expand="md">
          <NavbarBrand href="/"><img src={brandLogo} alt="brand-logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={Path.ABOUT}><div style={styleTab}>About</div></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={Path.FEATURES}><div style={styleTab}>Features</div></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={Path.TEAM}><div style={styleTab}>Team</div></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
