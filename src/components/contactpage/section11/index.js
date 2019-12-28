import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'

import pic from '../../../images/laptop01.png';

export default  class Section5View extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAlign sectionLast gray text-center">
      	<Grid>
      		<Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1 className="sliderHeading">The Platform</h1>
            </Col>
      		  <Col lg={12} md={12} sm={12} xs={12}>

              <div className="row">
                <div className="large-12 columns">
                  <div className="owl-carousel owl-theme">
                    <div className="item" data-merge="3">
                      <Image src={pic} />
                    </div>
                    <div className="item" data-merge="3">
                      <Image src={pic} />
                    </div>
                    <div className="item" data-merge="3">
                      <Image src={pic} />
                    </div>
                    <div className="item" data-merge="3">
                      <Image src={pic} />
                    </div>
                    <div className="item" data-merge="3">
                      <Image src={pic} />
                    </div>
                    <div className="item" data-merge="3">
                      <Image src={pic} />
                    </div>
                    <div className="item" data-merge="3">
                      <Image src={pic} />
                    </div>
                    <div className="item" data-merge="3">
                      <Image src={pic} />
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