import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import pic from '../../../images/img24x7.png';

export default  class Section2Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAccess white bgCircle">
      	<Grid>
      		<Row className="destopVersion">
      		  <Col lg={6} md={6} sm={6} xs={12} className="bgHeadingCircle">
      		    <h1>Zero Carbon Now</h1>
      		    <p>Clean energy is our specialty. We offer a suite of solutions to allow all companies access to optimized clean energy.</p>
      		    <Button className="headerButton textBlack inline-block buttonMT">Get Your Access</Button>
      		  </Col>
      		  <Col lg={5} md={6} sm={6} xs={12} lgOffset={1}>
      		    <Image src={pic} responsive className="desktopImg" />
      		  </Col>
      		</Row>

          <Row className="mobileVersion">
            <Col lg={6} md={6} sm={6} xs={12}>
              <h1>Zero Carbon Now</h1>
              <Image src={pic} responsive className="mobileImg" />
              <p>Clean energy is our specialty. We offer a suite of solutions to allow all companies access to optimized clean energy.</p>
            </Col>
            <Col lg={5} md={6} sm={6} xs={12} lgOffset={1}>
              <Button className="headerButton textBlack inline-block">Get Your Access</Button>
            </Col>
          </Row>

      	</Grid>
      </section>

    );
  }
 }