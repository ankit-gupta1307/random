import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default  class Section1Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
  
	render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <section className="sectionAlign section1Home green">
              <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
              </video>

              <Row className="headerContent">
                <Col lg={6} lgOffset={3}>
                  <h1>You are the future of clean energy.</h1>
                </Col>
                <Col lg={3} lgOffset={3}>
                  <Button className="headerButton textYellow full">Buy Clean Energy</Button>
                </Col>
                <Col lg={3}>
                  <Button className="headerButton textYellow full">Develop Clean Energy</Button>
                </Col>
              </Row>

            </section>
          </Col>
        </Row>
      </Grid>
    );
  }
 }

