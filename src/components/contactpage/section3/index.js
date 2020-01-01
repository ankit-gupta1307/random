import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import pic from '../../../images/proccess.png';


export default  class Section3Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section className="sectionAccess white bgCircle3Contact">
        <Grid>
          <Row className="destopVersion">
            <Col lg={6} md={6} sm={6} xs={12} className="bgHeadingCircle">
              <h1>Streamline your Decisions</h1>
              <p>Developers use the platform to cut through the clutter and streamline their processes.</p>
              <Button className="headerButton textBlack inline-block buttonMT">Get Started</Button>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12} lgOffset={0}>
              <Image src={pic} responsive className="imgScale2"/>
            </Col>
          </Row>

          <Row className="mobileVersion">
            <Col lg={6} md={6} sm={6} xs={12}>
              <h1>Streamline your Decisions</h1>
              <Image src={pic} responsive />
              <p>Developers use the platform to cut through the clutter and streamline their processes.</p>
              </Col>
            <Col lg={6} md={6} sm={6} xs={12} lgOffset={0}>
              <Button className="headerButton textBlack inline-block">Get Started</Button>
            </Col>
          </Row>

        </Grid>
      </section>

    );
  }
 }