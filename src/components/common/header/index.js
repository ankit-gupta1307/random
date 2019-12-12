import React, { Component } from 'react';
import { Grid, Row, Col, Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


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
              <a href="homepage"><img src="https://content.readymag.com/5d7ae84c6d212c0a00da6054/1664457/upload-77e8678c-c7e2-4c3a-aef1-c273b65f370a.png" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#" className="loginBtn">
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
 }

