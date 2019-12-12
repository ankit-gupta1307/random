import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

export default  class Section5Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAlign sectionLast gray text-center">
      	<Grid>
      		<Row>
      		  <Col lg={6}>
      		    <h1>Go Green with Cue</h1>
      		    <p>We’ve built the most sophisticated and connected renewable network to date.</p>
      		    <Button className="headerButton textBlack inline-block">Get Que</Button>
      		  </Col>
      		  <Col lg={6}>
      		    <h1>Develop Projects with View</h1>
      		    <p>Our flagship product accelerates clean energy development worldwide.</p>
      		    <Button className="headerButton textBlack inline-block">Get View</Button>
      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }