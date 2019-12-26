import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Image } from 'react-bootstrap';
import logoWhite from '../../../images/white-logo.png';
import logoBlack from '../../../images/black-logo.png';

import {Link} from 'react-router-dom';

export default  class PageHeader extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}

	render() {
    return (
      <div>
      	<Navbar collapseOnSelect className="customHeader">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
              { window.location.pathname == '/' ? <Image src={logoWhite} className="logoWhite" /> : <Image src={logoBlack} className="logoBlack"/> }
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/" >
                Home
              </NavItem>
              <NavItem eventKey={2} href="/about">
                About
              </NavItem>
              <NavItem eventKey={2} href="" className="loginBtn">
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
 }

