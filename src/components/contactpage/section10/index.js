import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import pic from '../../../images/meter.png';


export default  class Section3Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section className="sectionAccess sectionAlign gray bgCircle3Contact viewSection">
        <Grid>
          <Row>
            <Col lg={4} md={4} sm={4} xs={12} className="bgHeadingCircle MTNone">
              <h1>Make the Switch</h1>
              <p>Estimate the boost to your project returns</p>
              <Row className="userForm">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input type="number" placeholder="Avg Number of Projects Built per year" />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input type="number" placeholder="Blended development cost ($/hr)" />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input type="number" placeholder="Avg time to complete one bid package (hrs)" />
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input type="number" placeholder="Avg Project Size (MWs)" />
                </Col>
              </Row>
              <Button className="headerButton numberBlack inline-block">Calculate</Button>
            </Col>
            <Col lg={4} md={4} sm={4} xs={12}>
              <Image src={pic} responsive className="userDataImage" />
            </Col>
            <Col lg={3} md={3} sm={3} xs={12}>
              <Row className="userDataDisplay">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input type="number" placeholder="$600,000 " disabled />
                  <p>Pipeline Net Present Value gains</p>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input type="number" placeholder="$973,184"disabled />
                  <p>Annual cost savings</p>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <input type="number" placeholder="$240" disabled />
                  <p>Origination gains</p>
                </Col>
              </Row>
            </Col>
          </Row>

        </Grid>
      </section>

    );
  }
 }