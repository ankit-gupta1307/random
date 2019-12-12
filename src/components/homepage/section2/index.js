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
      <section className="sectionAccess white">
      	<Grid>
      		<Row>
      		  <Col lg={6}>
      		    <h1>Zero Carbon Now</h1>
      		    <p>Clean energy is our specialty. We offer a suite of solutions to allow all companies access to optimized clean energy.</p>
      		    <Button className="headerButton textBlack inline-block">Get Your Access</Button>
      		  </Col>
      		  <Col lg={5} lgOffset={1}>
      		    <Image src={pic} responsive />
      		  </Col>
      		</Row>
      	</Grid>
      </section>

    );
  }
 }