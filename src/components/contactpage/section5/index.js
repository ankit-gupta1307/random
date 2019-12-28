import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import map from '../../../images/map.png';

export default  class Section5Contact extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionContact4 auto white sectionPrice">
        <Grid>
          <Row>
            <Col lg={12} lg={12} md={12} sm={12} xs={12}>
              <h1>Global Reach of Projects Run through HST</h1>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Image src={map} responsive/>
              </Col>
          </Row>

        </Grid>
      </section>
    );
  }
 }