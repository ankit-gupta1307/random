import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

export default  class Section5Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}

    this.handleClick = this.handleClick.bind(this)
	}

  handleClick() {
    window.location.href = "/view";
  }
  
	render() {
    return (
      <section className="sectionAlign sectionLast gray text-center">
      	<Grid>
      		<Row>
      		  <Col lg={5} md={6} sm={6} xs={12}>
      		    <h1>Go Green with Cue</h1>
      		    <p>We’ve built the most sophisticated and connected renewable network to date.</p>
      		    <Button className="headerButton textBlack inline-block" onClick={this.handleClick}>Get Que</Button>
      		  </Col>
      		  <Col lg={6} md={6} sm={6} xs={12} lgOffset={1}>
      		    <h1 className="mobileMarginTop">Develop Projects with View</h1>
      		    <p>Our flagship product accelerates clean energy development worldwide.</p>
      		    <Button className="headerButton textBlack inline-block" onClick={this.handleClick}>Get View</Button>
      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }