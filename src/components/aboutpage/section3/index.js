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
      <section className="sectionAbout3 sky">
      	<Grid>
      		<Row>
      			<Col lg={7} lgOffset={3}>
      		    <h1>HST is backed by some of the most influential thinkers in the world.</h1>
              <p>We are bringing clean energy to the world together.</p>
      			</Col>
      		  
      		  <Col lg={4}>
      		  	<Image src={partner01} />
      		  </Col>
            <Col lg={4}>
              <Image src={partner02} />
            </Col>
            <Col lg={4}>
              <Image src={partner03} />
            </Col>

            <Col lg={4}>
              <Image src={partner04} />
            </Col>
            <Col lg={4}>
              <Image src={partner05} />
            </Col>
            <Col lg={4}>
              <Image src={partner06} />
            </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }