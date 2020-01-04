import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default  class Section1Home extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBuy = this.handleClickBuy.bind(this);
	}

  handleClickBuy() {
    window.location.href = "http://cue.energy/"
  }
  handleClick() {
    window.location.href = "/view"
  }
  
	render() {
    return (
      <Grid className="customContainer">
        <Row>
          <Col lg={12}>
            <section className="sectionAlign section1Home bgColorBlack">
              <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
              </video>

              <Row className="headerContent">
                <Col lg={12} lgOffset={0}>
                  <h1 className="headerContentHeading">You are the future <span> of clean energy.</span></h1>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12} lgOffset={3}>
                  <Button className="headerButton textYellow full" onClick={this.handleClickBuy}>Buy Clean Energy</Button>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <Button className="headerButton textYellow full" onClick={this.handleClick}>Develop Clean Energy</Button>
                </Col>
              </Row>

            </section>
          </Col>
        </Row>
      </Grid>
    );
  }
 }

