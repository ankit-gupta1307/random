import React, { Component } from 'react';
import { Grid, Row, Col, Nav,Image, Navbar, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';


export default  class PageFooter extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {

    return (

      <section className={(window.location.pathname === '/') ? "sectionFooterBTC black" : (window.location.pathname === '/about') ? "sectionFooterBlue black" : "sectionFooter black"}>
        <Grid>
          <Row>
            <Col lg={6} md={6} sm={6} xs={12} className="leftSide">
              <ul>
                <li>
                  <a href="#"><Image src="https://d3n32ilufxuvd1.cloudfront.net/5d7ae84c6d212c0a00da6054/1538099/upload-4e3ce914-13a1-4baa-9d7a-cc323162095f.png" /></a>
                </li>
                <li>
                  <a href="#"><Image src="https://d3n32ilufxuvd1.cloudfront.net/5d7ae84c6d212c0a00da6054/1538099/upload-d72c12b7-94d0-408b-a39f-c6c26aed58db.png" /></a>
                </li>
              </ul>
            </Col>
            
            <Col lg={6} md={6} sm={6} xs={12} className="rightSide">
              <h1>Join our Newsletter</h1>
              <p>Let's keep in touch and green the grid together!</p>
              <Row className="footerForm">
                <Col lg={6} md={6} sm={8} xs={8}>
                  <input type="text" placeholder="Email Address" />
                </Col>
                <Col lg={6} md={6} sm={4} xs={4}>
                  <Button>Submit</Button>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={6} xs={12} className="leftSide">
              <p>Press</p>
              <p>Follow</p>
              <p>Copyright © 2020 HST Inc. All rights reserved.</p>
            </Col>
            
          </Row>
        </Grid>
      </section>
    );
  }
 }

