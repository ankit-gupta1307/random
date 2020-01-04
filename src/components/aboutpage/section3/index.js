import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import partner01 from '../../../images/partner01.png';
import partner02 from '../../../images/partner02.png';
import partner03 from '../../../images/partner03.png';
import partner04 from '../../../images/partner04.png';
import partner05 from '../../../images/partner05.png';
import partner06 from '../../../images/partner06.png';

export default  class Section3About extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAbout3 bgTheme sectionParter">
      	<Grid>
      		<Row>
      			<Col lg={8} md={8} sm={8} xs={12} lgOffset={2} lgOffset={2} smOffset={2} >
      		    <h1 className="ParterH">HST is backed by some of the most influential thinkers in the world.</h1>
              <p className="ParterP themeTextColor">We are bringing clean energy to the world together.</p>
      			</Col>
      		  
      		  <Col lg={4} md={4} sm={4} xs={12}>
      		  	<a href="http://www.thexandergroup.com/" target="_blank"><Image src={partner01} /></a>
      		  </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="https://elementalexcelerator.com/" target="_blank"><Image src={partner02} /></a>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="https://solgenix.net" target="_blank"><Image src={partner03} /></a>
            </Col>

            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="https://www.bolur.com/" target="_blank"><Image src={partner04} /></a>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="https://kae-capital.com/" target="_blank"><Image src={partner05} /></a>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <a href="https://grok.ventures/" target="_blank"><Image src={partner06} /></a>
            </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }