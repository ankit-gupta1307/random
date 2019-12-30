import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import pic1 from '../../../images/sponsor-img01.png';
import pic2 from '../../../images/sponsor-img02.png';
import pic3 from '../../../images/sponsor-img03.png';
import pic4 from '../../../images/sponsor-img04.png';
import pic5 from '../../../images/sponsor-img05.png';
import pic6 from '../../../images/sponsor-img06.png';
import pic7 from '../../../images/sponsor-img07.png';

export default  class Section7Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="Section7Home">
      	<Grid fluid>
      		<Row>
      		  <Col lg={12} md={12} sm={12} xs={12}>
              <h1>As Seen In</h1>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
      		    <ul className="pressLogo">
                <li>
                  <Image src={pic1} />
                </li>
                <li>
                  <Image src={pic2} />
                </li>
                <li>
                  <Image src={pic3} />
                </li>
                <li>
                  <Image src={pic4} />
                </li>
                <li>
                  <Image src={pic5} />
                </li>
                <li>
                  <Image src={pic6} />
                </li>
                <li>
                  <Image src={pic7} />
                </li>
                  
              </ul>
      		  </Col>
      		</Row>

      	</Grid>
      </section>
    );
  }
 }