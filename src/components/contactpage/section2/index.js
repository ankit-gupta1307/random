import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import pic from '../../../images/figma5.png';


export default  class Section2Contact extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAccess white bgCircle4View">
        <Grid>
          <Row className="destopVersion">
            <Col lg={6} md={6} sm={6} xs={12} >
              <h1 className="fontSize56">Higher Returns with <span>Less Risk</span></h1>
              <p>Developers on our network are bringing the grid enough clean energy for 1 Billion people over the next decade.</p>
              <Button className="headerButton textBlack inline-block buttonMT">Develop Projects</Button>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} lgOffset={0}>
              <Image src={pic} responsive className="imgScale3" />
            </Col>
          </Row>

          <Row className="mobileVersion">
            <Col lg={6} md={6} sm={6} xs={12}>
              <h1>Higher Returns with Less Risk</h1>
              <Image src={pic} responsive />
              <p>Developers on our network are bringing the grid enough clean energy for 1 Billion people over the next decade.</p>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} lgOffset={1}>
              <Button className="headerButton textBlack inline-block">Develop Projects</Button>
            </Col>
          </Row>

        </Grid>
      </section>

    );
  }
 }