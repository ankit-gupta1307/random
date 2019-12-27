import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default  class SectionContactLine extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="SectionContactLine">
        <Grid>
          <Row className="blueRow">
            <Col lg={3} md={4} sm={4} xs={12}>
              <h1 className="displayData">100,000+ <span>MW of Projects in Development</span></h1>
            </Col>
            <Col lg={3} md={4} sm={4} xs={12}>
              <h1 className="displayData">120m <span>Tons of CO2 Equivalent</span></h1>
            </Col>
            <Col lg={3} md={4} sm={4} xs={12}>
              <h1 className="displayData">80+ <span>Countries with Projects</span></h1>
            </Col>
            <Col lg={3} md={4} sm={4} xs={12}>
              <h1 className="displayData">15000+ <span>Projects on the Network</span></h1>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
 }