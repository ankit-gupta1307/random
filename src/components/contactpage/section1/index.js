import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import pic from '../../../images/aboutUsBanner.png';

export default  class Section1Contact extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <Grid className="customContainer">
        <Row>
          <Col lg={12}>
            <section className="sectionAlign sectionContact bg">
              <Row className="headerContent">
                <Col lg={12} lgOffset={0}>
                  <h1>You are the future <span> of clean energy.</span></h1>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12} lgOffset={3}>
                  <Button className="headerButton textYellow full">Buy Clean Energy</Button>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <Button className="headerButton textYellow full">Develop Clean Energy</Button>
                </Col>
              </Row>

            </section>
          </Col>
        </Row>
      </Grid>
    );
  }
 }