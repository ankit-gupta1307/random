import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import icon1 from '../../../images/icon01.png';
import icon2 from '../../../images/icon02.png';
import icon3 from '../../../images/icon03.png';

export default  class Section4About extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAbout4 white">
      	<Grid>
      		<Row>
      			<Col lg={12}>
      		    <h1>Our Approach</h1>
      			</Col>
      		  <Col lg={4}>
      		  	<Image src={icon1} />
      		    <h2>Plan better projects</h2>
      		    <p>We enable developers to triage projects and bid the most competitive ones.</p>
      		  </Col>
      		  <Col lg={4}>
      		  	<Image src={icon2} />
      		    <h2>Drive scalable contracts</h2>
      		    <p>We have leading marketplace algorithms to help clean energy buyers and sellers find the best contracts for them.</p>
      		  </Col>
      		  <Col lg={4}>
      		  	<Image src={icon3} />
      		    <h2>Reduce energy price</h2>
      		    <p>We use optimization technology to help developers reduce the Levelized Cost of Energy.</p>
      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }