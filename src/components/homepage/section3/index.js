import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

export default  class Section3Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAccess white bg plrnone">
      	<Grid>
      		<Row className="destopVersion">
      		  <Col lg={5} md={6} sm={6} xs={12} lgOffset={7} mdOffset={6} smOffset={6}>
      		    <h1 className="textWhite textSizeSmall desktopTextAlign">Societal-scale change starts with you</h1>
      		    <p className="desktopTextAlignP">The time is now for companies to buy zero carbon energy. Our clean energy concierge sources and manages renewables for you and your supply chain.</p>
      		  </Col>
      		</Row>

      		<Row className="mobileVersion">
      		  <Col lg={5} md={6} sm={6} xs={12} lgOffset={7} mdOffset={6} smOffset={6} className="boyBgMobile">
      		    <h1 className="textWhite textSizeSmall mobileTextHome">Societal-scale change starts with you</h1>
      		  </Col>
      		  <Col lg={5} md={5} sm={5} xs={12} lgOffset={7} mdOffset={7} smOffset={7}>
      		    <p className="mobileTime textBlack">The time is now for companies to buy zero carbon energy. Our clean energy concierge sources and manages renewables for you and your supply chain.</p>
      		  </Col>
      		</Row>

      	</Grid>
      </section>
    );
  }
 }