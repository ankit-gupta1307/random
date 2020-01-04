import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'

import pic01 from '../../../images/laptop01.png';
import pic02 from '../../../images/platform-new-2.png';
import pic03 from '../../../images/platform-new-3.png';
import pic04 from '../../../images/platform-new-4.png';
import pic05 from '../../../images/platform-new-5.png';
import pic06 from '../../../images/platform-new-6.png';
import pic07 from '../../../images/platform-new-7.png';

export default  class Section5View extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionSlider gray text-center">
      	<Grid fluid className="sliderContainer1">
      		<Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1 className="sliderHeading">The Platform</h1>
            </Col>

      		  <Col lg={12} md={12} sm={12} xs={12}>

              <div class="row">
                <div class="large-12 columns">
                  <div class="nonloop owl-carousel">
                    <div class="item">
                      <Image src={pic01} />
                    </div>
                    <div class="item">
                      <Image src={pic02} />
                    </div>
                    <div class="item">
                      <Image src={pic03} />
                    </div>
                    <div class="item">
                      <Image src={pic04} />
                    </div>
                    <div class="item">
                      <Image src={pic05} />
                    </div>
                    <div class="item">
                      <Image src={pic06} />
                    </div>
                    <div class="item">
                      <Image src={pic07} />
                    </div>
                  </div>
                </div>
              </div>

      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }