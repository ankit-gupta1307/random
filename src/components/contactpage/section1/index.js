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
              <Row className="headerContent customRow">
                <Col lg={12} md={12} sm={12} xs={12} lgOffset={0}>
                  <h1>View</h1>
                  <p>The #1Clean Energy Development <span> Software Platform.</span></p>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12} lgOffset={3} mdOffset={3} smOffset={3}>
                  <Button className="headerButton textYellow full">Develop Projects</Button>
                </Col>
              </Row>

            </section>
          </Col>
        </Row>
      </Grid>
    );
  }
 }