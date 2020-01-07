import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default  class SectionContactLine extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="SectionContactLine">
        <Grid>
          <Row className="blueRow">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1 className="displayDataHeading">Our Network</h1>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
 }