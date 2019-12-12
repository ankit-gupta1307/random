import React, { Component } from 'react';
import { Grid, Row, Col, Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';


export default  class PageFooter extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <Grid>
        <Row>
          <Col lg={6} className="leftSide">
            <ul>
              <li>
                <a href="#"><Image src="https://d3n32ilufxuvd1.cloudfront.net/5d7ae84c6d212c0a00da6054/1538099/upload-4e3ce914-13a1-4baa-9d7a-cc323162095f.png" /></a>
              </li>
              <li>
                <a href="#"><Image src="https://d3n32ilufxuvd1.cloudfront.net/5d7ae84c6d212c0a00da6054/1538099/upload-d72c12b7-94d0-408b-a39f-c6c26aed58db.png" /></a>
              </li>
            </ul>
            <p>Press</p>
            <p>Follow</p>
            <p>Copyright © 2020 HST Inc. All rights reserved.</p>
          </Col>
          <Col lg={6} className="rightSide">
            <h1>Join our Newsletter</h1>
            <p>Let's keep in touch and green the grid together!</p>
            <Row className="footerForm">
              <Col lg={6}>
                <input type="text" />
              </Col>
              <Col lg={6}>
                <Button>Submit</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
 }

