import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

export default  class Section5About extends React.Component {
	constructor(props) {
		super(props)
    this.state = {}
	}
	render() {
    return (
      <section className="sectionAbout5 white bg">
      	<Grid>
      		<Row>
      		  <Col lg={5} lg={4} md={6} sm={6} xs={12} lgOffset={0} mdOffset={3} smOffset={3}>
      		    <h1 className="textWhite textSizeSmall">Let's create a zero carbon world together</h1>
      		  </Col>
      		</Row>
      	</Grid>
      </section>
    );
  }
 }